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
  relatedTopics: AuthorityLink[];
  insightLinks: AuthorityLink[];
  ctaTitle?: string;
  ctaText?: string;
}

export const commonAuthorityCTA = {
  title: 'Looking for strategic trade advisory support?',
  text: 'Dominion Partners provides integrated trade, treasury, and regulatory advisory for organizations operating internationally.'
};

export const authorityLinks: AuthorityLink[] = [
  {
    title: 'Tariffs & Trade Remedies',
    description:
      'Tariff classification, anti-dumping, countervailing duties, and trade remedy proceedings across international markets.',
    href: '/tariffs'
  },
  {
    title: 'Customs Compliance',
    description:
      'Import and export customs obligations, documentation, valuation, and border compliance across jurisdictions.',
    href: '/customs-compliance'
  },
  {
    title: 'Sanctions & Export Controls',
    description:
      'Export control regimes, sanctions screening, and dual-use goods compliance across international trade corridors.',
    href: '/sanctions'
  },
  {
    title: 'Trade Agreements',
    description:
      'WTO rules, FTA market access, preferential tariff rates, and rules of origin for international trade flows.',
    href: '/trade-agreements'
  },
  {
    title: 'Transfer Pricing',
    description:
      'Transfer pricing frameworks for international trade transactions, intercompany arrangements, and cross-border supply chains.',
    href: '/transfer-pricing'
  },
  {
    title: 'AML in Trade Finance',
    description:
      'Anti-money laundering obligations in trade finance, supply chain payments, and cross-border transaction structures.',
    href: '/aml-trade-finance'
  }
];

export const insightLinks: AuthorityLink[] = [
  {
    title: 'Navigating tariff classification for cross-border goods',
    description:
      'How classification decisions affect duty rates, compliance exposure, and supply chain costs across jurisdictions.',
    href: '/insights'
  },
  {
    title: 'Export controls and the technology supply chain',
    description:
      'Practical context for technology and dual-use goods crossing international borders under multilateral control regimes.',
    href: '/insights'
  },
  {
    title: 'Trade finance and AML compliance',
    description:
      'How AML obligations apply across trade finance instruments and cross-border payment structures.',
    href: '/insights'
  }
];

export const authorityPages: Record<string, AuthorityPage> = {
  tariffs: {
    slug: 'tariffs',
    href: '/tariffs',
    eyebrow: 'Trade remedies',
    title: 'Tariffs and trade remedies in international trade.',
    description:
      'A practical overview of tariff classification, anti-dumping, countervailing duties, and trade remedy proceedings.',
    body: [
      'Tariff classification affects duty liability, supply chain cost, and compliance exposure across every international shipment.',
      'Trade remedy proceedings — including anti-dumping and countervailing duty investigations — can materially affect market access and sourcing strategy for organizations operating across borders.'
    ],
    relatedTopics: [authorityLinks[1], authorityLinks[2], authorityLinks[3]],
    insightLinks
  },
  'customs-compliance': {
    slug: 'customs-compliance',
    href: '/customs-compliance',
    eyebrow: 'Customs',
    title: 'Customs compliance for international trade operations.',
    description:
      'Import and export customs obligations, documentation requirements, valuation rules, and border compliance across jurisdictions.',
    body: [
      'Customs compliance is an operational requirement for every organization moving goods across international borders.',
      'Documentation gaps, valuation errors, and classification inconsistencies can create liability, delays, and enforcement risk across multiple jurisdictions simultaneously.'
    ],
    relatedTopics: [authorityLinks[0], authorityLinks[2], authorityLinks[3]],
    insightLinks
  },
  sanctions: {
    slug: 'sanctions',
    href: '/sanctions',
    eyebrow: 'Export controls',
    title: 'Sanctions and export controls in international trade.',
    description:
      'Export control regimes, sanctions screening, and dual-use goods compliance across international trade corridors.',
    body: [
      'Sanctions and export controls have expanded significantly across major trading jurisdictions, with material implications for supply chain sourcing, counterparty relationships, and payment flows.',
      'Organizations operating internationally need a clear view of applicable regimes, screening obligations, and how controls interact across the jurisdictions in which they operate.'
    ],
    relatedTopics: [authorityLinks[0], authorityLinks[1], authorityLinks[5]],
    insightLinks
  },
  'trade-agreements': {
    slug: 'trade-agreements',
    href: '/trade-agreements',
    eyebrow: 'Market access',
    title: 'Trade agreements and market access for international operations.',
    description:
      'WTO rules, free trade agreement market access, preferential tariff rates, and rules of origin for international trade flows.',
    body: [
      'Free trade agreements create market access opportunities, but realizing those benefits requires careful attention to rules of origin, documentation, and qualifying conditions.',
      'Organizations sourcing, manufacturing, or exporting internationally should understand how applicable agreements affect their cost structure, compliance obligations, and competitive position.'
    ],
    relatedTopics: [authorityLinks[0], authorityLinks[1], authorityLinks[4]],
    insightLinks
  },
  'transfer-pricing': {
    slug: 'transfer-pricing',
    href: '/transfer-pricing',
    eyebrow: 'Transfer pricing',
    title: 'Transfer pricing in international trade and supply chains.',
    description:
      'Transfer pricing frameworks for international trade transactions, intercompany arrangements, and cross-border supply chain structures.',
    body: [
      'Transfer pricing applies wherever related entities transact across borders — and the intersection with customs valuation, trade finance, and supply chain structures creates compounding complexity.',
      'Organizations with intercompany trade flows need consistent, defensible transfer pricing that accounts for trade terms, logistics, risk allocation, and jurisdictional requirements.'
    ],
    relatedTopics: [authorityLinks[0], authorityLinks[1], authorityLinks[5]],
    insightLinks
  },
  'aml-trade-finance': {
    slug: 'aml-trade-finance',
    href: '/aml-trade-finance',
    eyebrow: 'AML compliance',
    title: 'AML compliance in trade finance and cross-border payments.',
    description:
      'Anti-money laundering obligations in trade finance, supply chain payments, and cross-border transaction structures.',
    body: [
      'Trade-based money laundering is a recognized compliance risk, and AML obligations increasingly apply across documentary trade instruments, open-account payments, and supply chain finance structures.',
      'Organizations operating cross-border payment flows and trade finance arrangements need a clear view of applicable AML frameworks and how they interact with trade documentation and counterparty relationships.'
    ],
    relatedTopics: [authorityLinks[1], authorityLinks[2], authorityLinks[3]],
    insightLinks
  }
};
