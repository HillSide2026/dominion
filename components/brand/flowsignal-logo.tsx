import Link from 'next/link';
import { cn } from '@/lib/utils';

type FlowSignalLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  lockup?: boolean;
};

export function FlowSignalLogo({
  href = '/',
  className,
  imageClassName,
  lockup = false
}: FlowSignalLogoProps) {
  return (
    <Link href={href} className={cn('inline-flex items-center', className)}>
      <img
        src={lockup ? '/brand/dominion-logo-cropped.png' : '/brand/dominion-mark.png'}
        alt="Dominion Partners"
        className={cn('h-9 w-auto object-contain', imageClassName)}
      />
    </Link>
  );
}
