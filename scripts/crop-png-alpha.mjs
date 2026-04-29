import { readFileSync, writeFileSync } from 'node:fs';
import { deflateSync, inflateSync } from 'node:zlib';

const [, , inputPath, outputPath, paddingInput = '0'] = process.argv;

if (!inputPath || !outputPath) {
  throw new Error('Usage: node scripts/crop-png-alpha.mjs input.png output.png [padding]');
}

const padding = Number(paddingInput);
const png = readFileSync(inputPath);
const signature = png.subarray(0, 8);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

if (!signature.equals(pngSignature)) {
  throw new Error('Input is not a PNG file');
}

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function readChunks(buffer) {
  const chunks = [];
  let offset = 8;

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    chunks.push({ type, data });
    offset += 12 + length;
  }

  return chunks;
}

function createChunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  typeBuffer.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return chunk;
}

function unfilterScanline(type, row, previous, bytesPerPixel) {
  const output = Buffer.alloc(row.length);

  for (let index = 0; index < row.length; index += 1) {
    const left = index >= bytesPerPixel ? output[index - bytesPerPixel] : 0;
    const up = previous ? previous[index] : 0;
    const upLeft = previous && index >= bytesPerPixel
      ? previous[index - bytesPerPixel]
      : 0;
    let value;

    if (type === 0) {
      value = row[index];
    } else if (type === 1) {
      value = row[index] + left;
    } else if (type === 2) {
      value = row[index] + up;
    } else if (type === 3) {
      value = row[index] + Math.floor((left + up) / 2);
    } else if (type === 4) {
      const predictor = left + up - upLeft;
      const leftDistance = Math.abs(predictor - left);
      const upDistance = Math.abs(predictor - up);
      const upLeftDistance = Math.abs(predictor - upLeft);
      const paeth = leftDistance <= upDistance && leftDistance <= upLeftDistance
        ? left
        : upDistance <= upLeftDistance
          ? up
          : upLeft;
      value = row[index] + paeth;
    } else {
      throw new Error(`Unsupported PNG filter type: ${type}`);
    }

    output[index] = value & 0xff;
  }

  return output;
}

const chunks = readChunks(png);
const ihdr = chunks.find((chunk) => chunk.type === 'IHDR')?.data;

if (!ihdr) {
  throw new Error('PNG is missing IHDR chunk');
}

const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
const bitDepth = ihdr[8];
const colorType = ihdr[9];

if (bitDepth !== 8 || colorType !== 6) {
  throw new Error('Only 8-bit RGBA PNG files are supported');
}

const idat = Buffer.concat(
  chunks.filter((chunk) => chunk.type === 'IDAT').map((chunk) => chunk.data)
);
const inflated = inflateSync(idat);
const bytesPerPixel = 4;
const rowBytes = width * bytesPerPixel;
const pixels = Buffer.alloc(width * height * bytesPerPixel);
let inputOffset = 0;
let previousRow = null;

for (let y = 0; y < height; y += 1) {
  const filterType = inflated[inputOffset];
  const row = inflated.subarray(inputOffset + 1, inputOffset + 1 + rowBytes);
  const unfiltered = unfilterScanline(filterType, row, previousRow, bytesPerPixel);
  unfiltered.copy(pixels, y * rowBytes);
  previousRow = unfiltered;
  inputOffset += 1 + rowBytes;
}

let minX = width;
let minY = height;
let maxX = -1;
let maxY = -1;

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const alpha = pixels[(y * width + x) * bytesPerPixel + 3];

    if (alpha > 0) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
}

if (maxX < minX || maxY < minY) {
  throw new Error('No non-transparent pixels found');
}

minX = Math.max(0, minX - padding);
minY = Math.max(0, minY - padding);
maxX = Math.min(width - 1, maxX + padding);
maxY = Math.min(height - 1, maxY + padding);

const croppedWidth = maxX - minX + 1;
const croppedHeight = maxY - minY + 1;
const raw = Buffer.alloc((croppedWidth * bytesPerPixel + 1) * croppedHeight);

for (let y = 0; y < croppedHeight; y += 1) {
  const rawOffset = y * (croppedWidth * bytesPerPixel + 1);
  raw[rawOffset] = 0;

  for (let x = 0; x < croppedWidth; x += 1) {
    const sourceOffset = ((minY + y) * width + minX + x) * bytesPerPixel;
    const targetOffset = rawOffset + 1 + x * bytesPerPixel;
    pixels.copy(raw, targetOffset, sourceOffset, sourceOffset + bytesPerPixel);
  }
}

const outputIhdr = Buffer.from(ihdr);
outputIhdr.writeUInt32BE(croppedWidth, 0);
outputIhdr.writeUInt32BE(croppedHeight, 4);

writeFileSync(
  outputPath,
  Buffer.concat([
    pngSignature,
    createChunk('IHDR', outputIhdr),
    createChunk('IDAT', deflateSync(raw)),
    createChunk('IEND', Buffer.alloc(0))
  ])
);

console.log(
  `Cropped ${inputPath} from ${width}x${height} to ${croppedWidth}x${croppedHeight}`
);
