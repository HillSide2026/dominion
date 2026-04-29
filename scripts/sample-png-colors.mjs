import { readFileSync } from 'node:fs';
import { inflateSync } from 'node:zlib';

const [, , inputPath] = process.argv;

if (!inputPath) {
  throw new Error('Usage: node scripts/sample-png-colors.mjs input.png');
}

const png = readFileSync(inputPath);
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

if (!png.subarray(0, 8).equals(signature)) {
  throw new Error('Input is not a PNG file');
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

function unfilter(type, row, previous, bytesPerPixel) {
  const output = Buffer.alloc(row.length);

  for (let index = 0; index < row.length; index += 1) {
    const left = index >= bytesPerPixel ? output[index - bytesPerPixel] : 0;
    const up = previous ? previous[index] : 0;
    const upLeft = previous && index >= bytesPerPixel
      ? previous[index - bytesPerPixel]
      : 0;
    let value;

    if (type === 0) value = row[index];
    else if (type === 1) value = row[index] + left;
    else if (type === 2) value = row[index] + up;
    else if (type === 3) value = row[index] + Math.floor((left + up) / 2);
    else if (type === 4) {
      const predictor = left + up - upLeft;
      const leftDistance = Math.abs(predictor - left);
      const upDistance = Math.abs(predictor - up);
      const upLeftDistance = Math.abs(predictor - upLeft);
      value =
        row[index] +
        (leftDistance <= upDistance && leftDistance <= upLeftDistance
          ? left
          : upDistance <= upLeftDistance
            ? up
            : upLeft);
    } else {
      throw new Error(`Unsupported PNG filter type: ${type}`);
    }

    output[index] = value & 0xff;
  }

  return output;
}

const chunks = readChunks(png);
const ihdr = chunks.find((chunk) => chunk.type === 'IHDR')?.data;

if (!ihdr) throw new Error('PNG is missing IHDR');

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
const colors = new Map();
let inputOffset = 0;
let previous = null;

for (let y = 0; y < height; y += 1) {
  const filter = inflated[inputOffset];
  const row = inflated.subarray(inputOffset + 1, inputOffset + 1 + rowBytes);
  const unfiltered = unfilter(filter, row, previous, bytesPerPixel);
  previous = unfiltered;
  inputOffset += 1 + rowBytes;

  for (let x = 0; x < width; x += 1) {
    const offset = x * bytesPerPixel;
    const red = unfiltered[offset];
    const green = unfiltered[offset + 1];
    const blue = unfiltered[offset + 2];
    const alpha = unfiltered[offset + 3];

    if (alpha < 250) continue;
    if (red < 20 && green < 20 && blue < 20) continue;
    if (red > 245 && green > 245 && blue > 245) continue;

    const key = [red, green, blue].map((value) => value.toString(16).padStart(2, '0')).join('');
    colors.set(key, (colors.get(key) || 0) + 1);
  }
}

const top = Array.from(colors.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .map(([hex, count]) => `#${hex} ${count}`);

console.log(top.join('\n'));
