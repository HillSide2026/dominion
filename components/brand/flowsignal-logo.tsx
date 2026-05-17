import Link from 'next/link';
import { cn } from '@/lib/utils';

type FlowSignalLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  lockup?: boolean;
  variant?: 'default' | 'white';
};

const lockupSrc = {
  default: '/brand/dominion-logo-cropped.png',
  white: '/brand/dominion-logo-white-cropped.png'
};

export function FlowSignalLogo({
  href = '/',
  className,
  imageClassName,
  lockup = false,
  variant = 'default'
}: FlowSignalLogoProps) {
  const src = lockup ? lockupSrc[variant] : '/brand/dominion-mark.png';

  return (
    <Link href={href} className={cn('inline-flex items-center', className)}>
      <img
        src={src}
        alt="Dominion Partners"
        className={cn('h-9 w-auto object-contain', imageClassName)}
      />
    </Link>
  );
}
