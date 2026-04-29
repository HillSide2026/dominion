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
        src="/brand/dominion-logo-cropped.png"
        alt="Dominion Partners"
        className={cn(
          'w-auto object-contain',
          lockup ? 'h-12' : 'h-10',
          imageClassName
        )}
      />
    </Link>
  );
}
