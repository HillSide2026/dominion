'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Calculator, FileText, Route, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const diagnosticNotes = [
  {
    title: 'Documentation requirements',
    text: 'Prepare invoices, agreements, banking records, and purpose notes before formal review.',
    icon: FileText
  },
  {
    title: 'Route considerations',
    text: 'Separate jurisdictions, counterparties, intermediaries, and timing into a clear route picture.',
    icon: Route
  },
  {
    title: 'Review considerations',
    text: 'Use the assessment to identify where deeper professional review is most likely to be needed.',
    icon: ShieldCheck
  }
];

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export default function FlowDiagnosticsPage() {
  const [monthlyOutbound, setMonthlyOutbound] = useState('125000');
  const [monthlyInbound, setMonthlyInbound] = useState('45000');
  const [corridors, setCorridors] = useState('3');
  const [urgentShare, setUrgentShare] = useState('20');
  const [manualHours, setManualHours] = useState('6');

  const diagnostic = useMemo(() => {
    const outbound = toNumber(monthlyOutbound);
    const inbound = toNumber(monthlyInbound);
    const corridorCount = Math.max(1, Math.round(toNumber(corridors)));
    const urgent = Math.min(100, toNumber(urgentShare));
    const hours = toNumber(manualHours);
    const volume = outbound + inbound;

    const volumeScore = Math.min(34, volume / 15000);
    const corridorScore = Math.min(24, corridorCount * 6);
    const timingScore = Math.min(22, urgent * 0.22);
    const manualScore = Math.min(20, hours * 2.5);
    const index = Math.min(
      100,
      Math.round(volumeScore + corridorScore + timingScore + manualScore)
    );

    const priority =
      index >= 70 ? 'High' : index >= 40 ? 'Moderate' : 'Baseline';
    const estimatedReviewHours = Math.round(
      (hours * 4.3 + corridorCount * 2.5 + urgent / 12) * 10
    ) / 10;

    const observations = [
      corridorCount > 1
        ? 'Multiple corridors increase routing complexity'
        : 'Route concentration remains easier to map and monitor',
      urgent >= 15
        ? 'Time-sensitive flows increase settlement risk'
        : 'Timing pressure appears more manageable at the current share',
      hours >= 5
        ? 'Manual review load suggests operational drag'
        : 'Manual review demand appears more contained at the current level'
    ];

    const pressurePoints = [
      corridorCount > 1 ? 'FX conversion points' : 'Settlement sequencing',
      corridorCount > 2 || urgent >= 15
        ? 'Intermediary dependencies'
        : 'Counterparty coordination',
      hours > 0 ? 'Documentation and sequencing' : 'Documentation completeness'
    ];

    return {
      index,
      priority,
      estimatedReviewHours,
      observations,
      pressurePoints,
      volume
    };
  }, [corridors, manualHours, monthlyInbound, monthlyOutbound, urgentShare]);

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold text-[#0614b8]">
          Member dashboard
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-950">
          Transaction Diagnostics
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Use this workspace to frame a cross-border transaction review before
          preparing notes, route questions, or client-facing materials.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader className="gap-3">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#0614b8]" />
              Transaction Profile
            </CardTitle>
            <CardDescription className="max-w-xl leading-6 text-gray-600">
              This tool evaluates transaction structure across trade, payment,
              and settlement layers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="monthly-outbound" className="mb-2">
                  Monthly outbound flow
                </Label>
                <Input
                  id="monthly-outbound"
                  inputMode="decimal"
                  value={monthlyOutbound}
                  onChange={(event) => setMonthlyOutbound(event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="monthly-inbound" className="mb-2">
                  Monthly inbound flow
                </Label>
                <Input
                  id="monthly-inbound"
                  inputMode="decimal"
                  value={monthlyInbound}
                  onChange={(event) => setMonthlyInbound(event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="corridors" className="mb-2">
                  Active corridors
                </Label>
                <Input
                  id="corridors"
                  inputMode="numeric"
                  value={corridors}
                  onChange={(event) => setCorridors(event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="urgent-share" className="mb-2">
                  Time-sensitive share
                </Label>
                <Input
                  id="urgent-share"
                  inputMode="decimal"
                  value={urgentShare}
                  onChange={(event) => setUrgentShare(event.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="manual-hours" className="mb-2">
                  Manual review hours per week
                </Label>
                <Input
                  id="manual-hours"
                  inputMode="decimal"
                  value={manualHours}
                  onChange={(event) => setManualHours(event.target.value)}
                />
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-gray-500">
              Indicative output only. Final review should be based on
              transaction specifics and professional assessment.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="gap-3">
            <CardTitle>Transaction Assessment</CardTitle>
            <CardDescription className="leading-6 text-gray-600">
              Use this view to understand likely exposure, pressure points, and
              the most appropriate next step.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500">Exposure level</p>
                    <p className="mt-2 text-2xl font-semibold text-[#0614b8]">
                      {diagnostic.priority}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly volume</p>
                    <p className="mt-2 text-2xl font-semibold text-gray-950">
                      {diagnostic.volume.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
                  <p className="text-sm leading-6 text-gray-700">
                    Estimated documentation and preparation load:{' '}
                    <span className="font-semibold">
                      {diagnostic.estimatedReviewHours} hours per month
                    </span>
                    .
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-gray-500">
                    Internal index {diagnostic.index}
                  </p>
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-gray-200 p-5">
                <h2 className="text-sm font-semibold text-gray-950">
                  Key observations
                </h2>
                <ul className="space-y-2 text-sm leading-6 text-gray-700">
                  {diagnostic.observations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 rounded-lg border border-gray-200 p-5">
                <h2 className="text-sm font-semibold text-gray-950">
                  Likely pressure points
                </h2>
                <ul className="space-y-2 text-sm leading-6 text-gray-700">
                  {diagnostic.pressurePoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 p-5">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold text-gray-950">
                    Recommended next step
                  </h2>
                  <p className="text-sm leading-6 text-gray-700">
                    This transaction would benefit from structured review before
                    execution.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#0614b8] text-white hover:bg-[#07108f] sm:w-auto"
                >
                  <Link href="/dashboard/route-review">
                    Request transaction review
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {diagnosticNotes.map((note) => (
          <Card key={note.title}>
            <CardHeader className="gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#0614b8] text-white">
                <note.icon className="h-5 w-5" />
              </div>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-gray-600">{note.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
