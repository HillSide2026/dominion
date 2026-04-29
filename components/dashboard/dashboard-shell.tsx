'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Menu,
  Route,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type ClientNavItem = {
  name: string;
  slug: string;
  caseCount: number;
};

const navItems = [
  { href: '/dashboard/cases', icon: BriefcaseBusiness, label: 'Export Cases' },
  { href: '/dashboard/route-review', icon: Route, label: 'Market Review' },
  { href: '/dashboard/resources', icon: FileText, label: 'Resources' },
  { href: '/dashboard/account', icon: Settings, label: 'Account' }
];

export function DashboardShell({
  children,
  clients
}: {
  children: React.ReactNode;
  clients: ClientNavItem[];
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-68px)] w-full max-w-7xl flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4 lg:hidden">
        <div className="flex items-center">
          <span className="font-medium">Export workspace</span>
        </div>
        <Button
          className="-mr-3"
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      <div className="flex h-full flex-1 overflow-hidden">
        <aside
          className={`w-64 border-r border-gray-200 bg-white lg:block lg:bg-gray-50 ${
            isSidebarOpen ? 'block' : 'hidden'
          } absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="h-full overflow-y-auto p-4">
            <div className="mb-5">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                Workspace
              </p>
              <div className="mt-2">
                {navItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);

                  return (
                    <Link key={item.href} href={item.href} passHref>
                      <Button
                        variant={isActive ? 'secondary' : 'ghost'}
                        className={`my-1 w-full justify-start shadow-none ${
                          isActive ? 'bg-gray-100 text-gray-950' : 'text-gray-600'
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                Clients
              </p>
              <div className="mt-2">
                {clients.length ? (
                  clients.map((client) => {
                    const href = `/dashboard/clients/${client.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link key={client.slug} href={href} passHref>
                        <Button
                          variant={isActive ? 'secondary' : 'ghost'}
                          className={`my-1 w-full justify-between shadow-none ${
                            isActive
                              ? 'bg-gray-100 text-gray-950'
                              : 'text-gray-600'
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <Building2 className="h-4 w-4 shrink-0" />
                            <span className="truncate">{client.name}</span>
                          </span>
                          <span className="text-xs text-gray-400">
                            {client.caseCount}
                          </span>
                        </Button>
                      </Link>
                    );
                  })
                ) : (
                  <p className="px-3 py-2 text-sm leading-5 text-gray-500">
                    Create a case to add a client workspace.
                  </p>
                )}
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
      </div>
    </div>
  );
}
