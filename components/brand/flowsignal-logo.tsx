import Link from 'next/link';
import { cn } from '@/lib/utils';

type FlowSignalLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  lockup?: boolean;
};

function DominionMark({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="36"
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Lower-left block */}
      <rect x="0" y="18" width="20" height="18" fill="#1440E0" />
      {/* Upper-right block */}
      <rect x="12" y="0" width="28" height="28" fill="#1440E0" />
      {/* White arrow cutout */}
      <polygon
        points="12,18 21,9 32,9 32,20 21,20 21,30 12,30"
        fill="white"
      />
    </svg>
  );
}

export function FlowSignalLogo({
  href = '/',
  className,
  lockup = false
}: FlowSignalLogoProps) {
  const logo = lockup ? (
    <span className="flex items-center gap-3">
      <DominionMark className="h-10 w-auto" />
      <span className="flex flex-col leading-none gap-0.5">
        <span className="text-2xl font-bold text-brand-ink tracking-tight leading-none">
          Dominion
        </span>
        <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-text uppercase leading-none">
          Partners
        </span>
      </span>
    </span>
  ) : (
    <span className="flex items-center gap-2.5">
      <DominionMark className="h-8 w-auto" />
      <span className="flex flex-col leading-none gap-0.5">
        <span className="text-base font-bold text-brand-ink tracking-tight leading-none">
          Dominion
        </span>
        <span className="text-[9px] font-semibold tracking-[0.2em] text-brand-text uppercase leading-none">
          Partners
        </span>
      </span>
    </span>
  );

  return (
    <Link href={href} className={cn('inline-flex items-center', className)}>
      {logo}
    </Link>
  );
}
