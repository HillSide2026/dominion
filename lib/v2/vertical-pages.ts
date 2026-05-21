import type { AuthorityLink } from '@/lib/authority-pages';
import { authorityLinks } from '@/lib/authority-pages';

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
  regulationTitle: string;
  regulationText: string;
  relatedTopics: AuthorityLink[];
  ctaText: string;
}

export const verticalPages: Record<string, VerticalPageData> = {
  'trade-advisory': {
    slug: 'trade-advisory',
    eyebrow: 'Trade Advisory',
    title: 'Trade Advisory',
    description: 'Structuring international operations with clarity, compliance, and commercial focus.',
    audience: 'Designed for businesses navigating complex cross-border trade environments.',
    practiceTitle: 'How Trade Advisory Works in Practice',
    practicePoints: [
      'Trade advisory covers market entry, transaction structuring, and regulatory coordination.',
      'Businesses and counterparties interact at points where goods, capital, and legal frameworks converge.',
      'Structuring decisions have downstream implications for compliance, contracts, and settlement.',
      'Cross-border trade environments require commercial, legal, and operational alignment.',
    ],
    modelsTitle: 'How We Help',
    models: [
      { title: 'Market Entry and Expansion', description: 'Entering new markets with the right structure from the outset.' },
      { title: 'Trade Structuring', description: 'Designing transactions that hold up commercially and contractually.' },
      { title: 'Regulatory Coordination', description: 'Aligning trade activity with jurisdictional requirements.' },
      { title: 'Operational Strategy', description: 'Ensuring trade structures function in practice.' },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText: 'Regulatory considerations often arise around how goods are classified, how value is allocated, and how counterparties are structured across jurisdictions.',
    relatedTopics: [authorityLinks[0], authorityLinks[1], authorityLinks[2]],
    ctaText: 'If you are building or scaling a cross-border trade operation, early decisions around structure, counterparties, and compliance can shape your operational and legal exposure.',
  },
  treasury: {
    slug: 'treasury',
    eyebrow: 'Treasury Advisory',
    title: 'Treasury & Trade Finance Advisory',
    description: 'Treasury advisory for businesses managing international trade, cross-border payments, and global supply chains.',
    audience: 'Designed for finance leaders at businesses operating across international trade and supply chains.',
    practiceTitle: 'How Treasury Advisory Works in Practice',
    practicePoints: [
      'Treasury for international trade involves more than banking — it spans payment flows, currency exposure, and intercompany structures.',
      'Organizations managing cross-border suppliers, procurement cycles, and settlement requirements face compounding complexity.',
      'Treasury decisions interact with trade terms, legal structures, and jurisdictional compliance requirements.',
      'Effective treasury design requires integrating commercial, financial, and regulatory considerations from the outset.',
    ],
    modelsTitle: 'How We Help',
    models: [
      { title: 'Cross-Border Payment Infrastructure', description: 'Designing payment and settlement structures that support international suppliers, counterparties, and trade operations.' },
      { title: 'FX Strategy and Optimization', description: 'Managing currency exposure across international trade and procurement operations.' },
      { title: 'Treasury Structuring', description: 'Aligning treasury operations with trade structures, supply chain flows, and multi-entity operations.' },
      { title: 'Regulatory and Compliance Alignment', description: 'Supporting treasury operations across cross-border trade and jurisdictional compliance environments.' },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText: 'Regulatory considerations typically arise around cross-border payment flows, currency controls, reporting obligations, and intercompany funding structures.',
    relatedTopics: [authorityLinks[0], authorityLinks[4], authorityLinks[5]],
    ctaText: 'If you are managing international treasury and trade finance operations, structuring payment flows and currency exposure as strategic considerations from the outset creates operational flexibility and regulatory clarity.',
  },
  exports: {
    slug: 'exports',
    eyebrow: 'Export Advisory',
    title: 'Supporting Canadian Organizations Expanding Internationally',
    description: 'Advisory for Canadian organizations entering international markets, navigating trade regulations, and expanding export operations.',
    audience: 'Designed for Canadian exporters, businesses entering new markets, and organizations coordinating international expansion.',
    practiceTitle: 'How Export Advisory Works in Practice',
    practicePoints: [
      'Export advisory spans market analysis, regulatory requirements, and operational readiness.',
      'Organizations expanding internationally encounter classification, customs, and documentation requirements across each market.',
      'Trade agreements, tariff structures, and market access conditions vary significantly across target jurisdictions.',
      'Successful export programs integrate commercial strategy with regulatory and compliance structures.',
    ],
    modelsTitle: 'How We Help',
    models: [
      { title: 'International Expansion Support', description: 'Tailored support for organizations entering new markets with structured advisory across legal and regulatory dimensions.' },
      { title: 'Strategic Trade Guidance', description: 'Guidance across trade remedies, market access, and regulatory requirements for each target market.' },
      { title: 'Market Access Review', description: 'Advisory-led review designed to identify export opportunities and compliance requirements across target jurisdictions.' },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText: 'Regulatory exposure arises from export control requirements, customs documentation, tariff classification, and local regulatory obligations in target markets.',
    relatedTopics: [authorityLinks[1], authorityLinks[2], authorityLinks[3]],
    ctaText: 'If you are expanding internationally, early alignment between commercial strategy, trade structure, and regulatory requirements will reduce friction and create a stronger foundation for growth.',
  },
  defence: {
    slug: 'defence',
    eyebrow: 'Defence',
    title: 'Defence',
    description: 'Strategic support for organizations navigating tariffs, trade barriers, customs issues, and cross-border compliance.',
    audience: 'Designed for importers, exporters, and businesses responding to regulatory and trade barriers across international operations.',
    practiceTitle: 'How Trade Defence Works in Practice',
    practicePoints: [
      'Cross-border businesses face regulatory complexity that can affect pricing, market access, supplier relationships, and operational continuity.',
      'Trade barriers, tariffs, customs obligations, and sanctions regimes create exposure that must be assessed and managed strategically.',
      "Many regulatory issues emerge from shifts in policy that are unrelated to a firm's own conduct.",
      'Effective defence strategy integrates regulatory review, documentation standards, and escalation pathways.',
    ],
    modelsTitle: 'How We Help',
    models: [
      { title: 'Regulatory Review', description: 'Clarifying the rules, filings, and obligations that affect cross-border operations before they slow down commercial activity.' },
      { title: 'Trade Defence Strategy', description: 'Helping organizations respond to tariffs, trade barriers, investigations, and measures that affect international supply chains.' },
      { title: 'Compliance Structuring', description: 'Designing practical operating structures that keep trade, supplier, and payment flows aligned with regulatory expectations.' },
      { title: 'Operational Readiness', description: 'Turning regulatory requirements into workflows that teams can execute consistently across markets and counterparties.' },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText: 'Regulatory considerations typically arise around tariff classification, trade remedy proceedings, customs compliance, and how restrictions apply to specific goods, counterparties, or trade corridors.',
    relatedTopics: [authorityLinks[0], authorityLinks[1], authorityLinks[2]],
    ctaText: 'If you are navigating tariffs, trade barriers, or regulatory complexity, early advisory engagement can help structure an effective response and protect commercial timelines.',
  },
  finreg: {
    slug: 'finreg',
    eyebrow: 'Payment Services Regulatory',
    title: 'Embedded Compliance Resources for Payment Service Providers and Neo-Banks',
    description: 'Embedded regulatory and compliance advisory for payment service providers, fintechs, and neo-banks navigating licensing, registration, and cross-border regulatory complexity.',
    audience: 'Designed for neo-banks, fintech platforms, and payment service providers scaling compliance programs across jurisdictions.',
    practiceTitle: 'How Payment Services Regulation Works in Practice',
    practicePoints: [
      'Payment services regulation is increasingly complex across jurisdictions, business models, and operational structures.',
      'Many payment firms face growing regulatory obligations while scaling products, entering new markets, and managing evolving compliance expectations.',
      'Licensing requirements, transaction monitoring, safeguarding arrangements, and reporting obligations shape how payment firms operate.',
      'Effective compliance infrastructure requires implementation-aware advisory that aligns with operational decision-making.',
    ],
    modelsTitle: 'How We Help',
    models: [
      { title: 'Licensing & Registration Strategy', description: 'Assessing licensing requirements, registration pathways, jurisdictional exposure, and regulator engagement strategies.' },
      { title: 'Regulatory Perimeter Analysis', description: 'Evaluating how products, services, transaction flows, and operational models intersect with payment services regulation.' },
      { title: 'Compliance Program Design', description: 'Designing practical compliance frameworks aligned with operational realities, growth objectives, and regulatory expectations.' },
      { title: 'Cross-Border Regulatory Structuring', description: 'Supporting organizations managing multi-jurisdictional payment operations, entity structures, and international compliance obligations.' },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText: 'Regulatory considerations typically arise around licensing thresholds, transaction monitoring obligations, safeguarding requirements, and how cross-border payment structures interact with applicable regimes.',
    relatedTopics: [authorityLinks[5], authorityLinks[4], authorityLinks[1]],
    ctaText: 'If you are building or scaling payment services infrastructure, approaching regulation as a structural business consideration rather than a reactive exercise will support both licensing strategy and operational growth.',
  },
};

export const getVerticalPage = (slug: keyof typeof verticalPages): VerticalPageData =>
  verticalPages[slug];
