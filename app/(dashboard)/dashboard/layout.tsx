import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { getCasesForCurrentTeam } from '@/lib/db/queries';

function clientSlug(name: string) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
}

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cases = await getCasesForCurrentTeam();
  const clients = Array.from(
    cases.reduce((map, caseRecord) => {
      const existing = map.get(caseRecord.company);
      map.set(caseRecord.company, {
        name: caseRecord.company,
        slug: clientSlug(caseRecord.company),
        caseCount: (existing?.caseCount || 0) + 1
      });
      return map;
    }, new Map<string, { name: string; slug: string; caseCount: number }>())
  )
    .map(([, client]) => client)
    .sort((a, b) => a.name.localeCompare(b.name));

  return <DashboardShell clients={clients}>{children}</DashboardShell>;
}
