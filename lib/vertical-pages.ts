import type { AuthorityLink } from '@/lib/authority-pages';

export interface VerticalCard {
  title: string;
  description: string;
}

export interface VerticalPageData {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  practiceTitle: string;
  practicePoints: string[];
  modelsTitle: string;
  models: VerticalCard[];
  relatedTopics: AuthorityLink[];
  ctaText: string;
}

export const verticalLinks: AuthorityLink[] = [
  {
    title: 'Trade Advisory',
    description:
      'Market access, trade remedies, representation, and cross-border trade strategy for international operations.',
    href: '/trade-advisory'
  },
  {
    title: 'Treasury Advisory',
    description:
      'Cross-border payment infrastructure, FX strategy, and treasury structuring for international trade operations.',
    href: '/treasury'
  },
  {
    title: 'Export Advisory',
    description:
      'Supporting Canadian organizations expanding internationally across markets, sectors, and regulatory environments.',
    href: '/exports'
  },
  {
    title: 'Supply Chain',
    description:
      'Aligning sourcing, logistics, and supplier relationships with trade policy and compliance requirements.',
    href: '/trade-advisory'
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Cross-border regulatory obligations, export controls, sanctions, and customs compliance advisory.',
    href: '/sanctions'
  }
];
