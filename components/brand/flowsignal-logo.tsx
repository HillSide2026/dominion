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
        src={lockup ? '/brand/dominion-logo.png' : '/brand/dominion-mark.png'}
        alt="Dominion Partners"
        className={cn(
          'w-auto object-contain',
          lockup ? 'h-10' : 'h-9',
          imageClassName
        )}
      />
    </Link>
  );
}
