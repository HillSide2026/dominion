import { getPermalink } from '~/utils/permalinks';

export interface AuthorityLink {
  title: string;
  description: string;
  href: string;
}

export interface AuthorityPage {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  body: string[];
  primaryLinks?: AuthorityLink[];
  relatedTopics: AuthorityLink[];
  insightLinks: AuthorityLink[];
  ctaTitle?: string;
  ctaText?: string;
}

export const commonAuthorityCTA = {
  title: 'Need a practical legal and regulatory map?',
  text: 'Use fintechlawyer.ca to understand the Canadian rules, risks, and market context behind fintech products.',
};

export const fintracClusterLinks: AuthorityLink[] = [
  {
    title: 'MSB Registration',
    description: 'Canadian MSB registration issues for fintech companies, payment businesses, and money movement models.',
    href: getPermalink('/msb-registration-canada'),
  },
  {
    title: 'FINTRAC Compliance',
    description: 'A practical overview of FINTRAC compliance obligations, controls, policies, and operational expectations.',
    href: getPermalink('/fintrac-compliance-canada'),
  },
  {
    title: 'Audit and Penalties',
    description: 'FINTRAC examination risk, administrative monetary penalties, and enforcement themes.',
    href: getPermalink('/fintrac-audit-penalties'),
  },
  {
    title: 'Suspicious Transaction Reports',
    description: 'How suspicious transaction reporting fits into AML governance and fintech operations.',
    href: getPermalink('/suspicious-transaction-reports-canada'),
  },
  {
    title: 'Payment Structuring',
    description: 'How product architecture, fund flows, and partner roles can affect Canadian regulatory treatment.',
    href: getPermalink('/payment-structuring-canada'),
  },
  {
    title: 'MSB Banking Risk',
    description: 'Banking, sponsor, processor, and de-risking issues for MSBs and fintech companies.',
    href: getPermalink('/msb-banking-risk-canada'),
  },
];

export const verticalLinks: AuthorityLink[] = [
  {
    title: 'Payments',
    description: 'Regulatory context for payment products, wallets, processors, embedded payments, and money movement.',
    href: getPermalink('/payments'),
  },
  {
    title: 'Lending',
    description: 'Legal and regulatory issues for consumer credit, business lending, disclosures, and partner models.',
    href: getPermalink('/lending'),
  },
  {
    title: 'Investment',
    description: 'Market structure and regulatory issues for investment platforms, wealth products, and investing tools.',
    href: getPermalink('/investment'),
  },
  {
    title: 'Insurance',
    description: 'Legal and regulatory issues for insurance technology, distribution, data, and embedded insurance models.',
    href: getPermalink('/insurance'),
  },
  {
    title: 'Infrastructure',
    description: 'Regulatory context for fintech infrastructure, APIs, data providers, BaaS, and platform partners.',
    href: getPermalink('/infrastructure'),
  },
];

export const insightLinks: AuthorityLink[] = [
  {
    title: 'MSB registration timeline in Canada',
    description: 'A practical primer on timing, sequencing, and common registration planning issues.',
    href: getPermalink('/insights/msb-registration-timeline-canada'),
  },
  {
    title: 'FINTRAC penalties case study',
    description: 'How enforcement outcomes can inform fintech compliance design and governance.',
    href: getPermalink('/insights/fintrac-penalties-case-study'),
  },
  {
    title: 'Stripe MSB risk in Canada',
    description: 'How platforms should think about MSB risk, payment flows, and partner responsibilities.',
    href: getPermalink('/insights/stripe-msb-risk-canada'),
  },
];

const fintracHubLink: AuthorityLink = {
  title: 'FINTRAC/MSB Hub',
  description: 'Return to the central FINTRAC and MSB authority map.',
  href: getPermalink('/fintrac-compliance'),
};

const insightsHubLink: AuthorityLink = {
  title: 'Insights',
  description: 'Read practical Canadian fintech legal and regulatory analysis.',
  href: getPermalink('/insights'),
};

export const authorityPages: Record<string, AuthorityPage> = {
  'fintrac-compliance': {
    slug: 'fintrac-compliance',
    href: getPermalink('/fintrac-compliance'),
    eyebrow: 'FINTRAC/MSB hub',
    title: 'FINTRAC and MSB compliance for Canadian fintech companies.',
    description:
      'The central map for understanding money services business registration, FINTRAC compliance, reporting, banking risk, and payment structuring in Canada.',
    body: [
      'FINTRAC and MSB issues often sit underneath product design, banking relationships, processor agreements, customer onboarding, and risk controls.',
      'This hub organizes the practical legal and regulatory topics fintech teams need to understand before launching or scaling money movement products in Canada.',
    ],
    primaryLinks: fintracClusterLinks,
    relatedTopics: verticalLinks,
    insightLinks,
  },
  'msb-registration-canada': {
    slug: 'msb-registration-canada',
    href: getPermalink('/msb-registration-canada'),
    eyebrow: 'FINTRAC pillar',
    title: 'MSB registration in Canada.',
    description:
      'A practical overview of when fintech companies may need to register as a money services business in Canada.',
    body: [
      'MSB registration analysis starts with the business model, not the label a company uses to describe itself.',
      'Payment flows, custody, foreign exchange, remittance functionality, virtual currency activity, and partner roles can all affect registration analysis.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[1], fintracClusterLinks[4], fintracClusterLinks[5]],
    insightLinks,
  },
  'fintrac-compliance-canada': {
    slug: 'fintrac-compliance-canada',
    href: getPermalink('/fintrac-compliance-canada'),
    eyebrow: 'FINTRAC pillar',
    title: 'FINTRAC compliance in Canada.',
    description:
      'A detailed authority page for Canadian FINTRAC compliance obligations, controls, records, reporting, and governance.',
    body: [
      'FINTRAC compliance is an operating system made up of policies, risk assessment, training, review, reporting, records, and governance.',
      'For fintech companies, the challenge is making those obligations work inside product flows, onboarding journeys, partner relationships, and transaction monitoring systems.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[0], fintracClusterLinks[2], fintracClusterLinks[3]],
    insightLinks,
  },
  'fintrac-audit-penalties': {
    slug: 'fintrac-audit-penalties',
    href: getPermalink('/fintrac-audit-penalties'),
    eyebrow: 'FINTRAC cluster',
    title: 'FINTRAC audits and penalties.',
    description:
      'Market intelligence on FINTRAC examinations, administrative monetary penalties, compliance gaps, and enforcement risk.',
    body: [
      'FINTRAC examinations test whether compliance programs are documented, implemented, monitored, and periodically reviewed.',
      'Penalty risk often turns on operational evidence: records, reporting decisions, training, risk assessment, and the ability to show how controls work in practice.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[1], fintracClusterLinks[3], fintracClusterLinks[5]],
    insightLinks,
  },
  'suspicious-transaction-reports-canada': {
    slug: 'suspicious-transaction-reports-canada',
    href: getPermalink('/suspicious-transaction-reports-canada'),
    eyebrow: 'FINTRAC cluster',
    title: 'Suspicious transaction reports in Canada.',
    description:
      'Practical context for suspicious transaction reporting and how STR obligations connect to fintech operations.',
    body: [
      'Suspicious transaction reporting is not just a form submission issue. It depends on escalation workflows, monitoring logic, employee training, and documented decision-making.',
      'Fintech teams need to understand how product signals, customer behavior, payment activity, and compliance judgment come together.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[1], fintracClusterLinks[2], fintracClusterLinks[4]],
    insightLinks,
  },
  'payment-structuring-canada': {
    slug: 'payment-structuring-canada',
    href: getPermalink('/payment-structuring-canada'),
    eyebrow: 'FINTRAC cluster',
    title: 'Payment structuring in Canada.',
    description:
      'How payment architecture, fund flows, custody, settlement, and partner roles can shape Canadian regulatory analysis.',
    body: [
      'Payment structuring is where legal analysis meets product architecture. Small changes in flow of funds or role allocation can change the regulatory risk profile.',
      'This topic is especially important for embedded payments, wallets, marketplaces, processor relationships, and sponsor-bank models.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[0], fintracClusterLinks[1], fintracClusterLinks[5]],
    insightLinks,
  },
  'msb-banking-risk-canada': {
    slug: 'msb-banking-risk-canada',
    href: getPermalink('/msb-banking-risk-canada'),
    eyebrow: 'FINTRAC cluster',
    title: 'MSB banking risk in Canada.',
    description:
      'Practical guidance on banking access, sponsor relationships, processor diligence, and de-risking issues for MSBs.',
    body: [
      'Banking risk is a core strategic issue for MSBs and fintech companies that touch money movement.',
      'Banks and partners often assess registration status, AML controls, transaction monitoring, prohibited use cases, geography, ownership, and operating history.',
    ],
    relatedTopics: [fintracHubLink, fintracClusterLinks[0], fintracClusterLinks[1], fintracClusterLinks[4]],
    insightLinks,
  },
};

export const getAuthorityPage = (slug: keyof typeof authorityPages): AuthorityPage => authorityPages[slug];
