'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FlowSignalLogo } from '@/components/brand/flowsignal-logo';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UserMenu() {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  if (!user) {
    return (
      <Button
        asChild
        variant="outline"
        className="rounded-full border-brand-border px-5 text-brand-ink hover:bg-brand-muted"
      >
        <Link href="/sign-in">Client Portal</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback>
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Client portal</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  return (
    <header className="border-b border-brand-border bg-white">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <FlowSignalLogo />
        <Suspense fallback={<div className="h-9 w-16" />}>
          <UserMenu />
        </Suspense>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#071225' }}>
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-white">
              Dominion Partners
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Cross-border trade and payment infrastructure
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Services
              </Link>
              <Link
                href="#how-we-work"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                How We Work
              </Link>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Services
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/trade-advisory"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Trade Advisory
              </Link>
              <Link
                href="/payment-services"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Payment Services
              </Link>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/disclaimer"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Disclaimers
              </Link>
              <Link
                href="/sign-in"
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                Client Portal
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Dominion Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
