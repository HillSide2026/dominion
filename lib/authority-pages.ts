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
  commonRisks: string[];
  howWeHelp: string[];
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
      'Tariff classification affects duty liability, supply chain cost, and compliance exposure across every international shipment. Getting classification right is not a back-office function — it is a strategic decision with direct cost and enforcement consequences.',
      'Trade remedy proceedings — including anti-dumping and countervailing duty investigations — can materially affect market access and sourcing strategy for organizations operating across borders. Exposure can emerge from shifts in policy that have nothing to do with a firm\'s own conduct.'
    ],
    commonRisks: [
      'Misclassification generating retroactive duty liability across large shipment volumes',
      'Anti-dumping duties applied to goods sourced from affected jurisdictions',
      'Failure to monitor remedy proceedings in relevant markets',
      'Classification inconsistency across subsidiaries or trading entities'
    ],
    howWeHelp: [
      'Classification review and HS code alignment across product lines',
      'Trade remedy monitoring and impact assessment',
      'Guidance on country of origin and rules of origin for duty planning',
      'Support for binding ruling applications and classification disputes'
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
      'Customs compliance is an operational requirement for every organization moving goods across international borders. The exposure is not limited to import duties — it extends to valuation disputes, origin disputes, licensing requirements, and enforcement proceedings that can interrupt operations.',
      'Documentation gaps, valuation errors, and classification inconsistencies can create liability, delays, and enforcement risk across multiple jurisdictions simultaneously. Compliance must be built into trade workflows from the outset, not layered on after the fact.'
    ],
    commonRisks: [
      'Valuation disputes resulting from related-party pricing or non-arm\'s-length transactions',
      'Documentation deficiencies creating entry delays or post-clearance reviews',
      'Inconsistent classification generating retroactive liability across high-volume trade lanes',
      'Licensing or permit gaps for controlled commodities at point of import or export'
    ],
    howWeHelp: [
      'Customs compliance program design and operational review',
      'Valuation methodology analysis for related-party and intercompany transactions',
      'Classification and documentation audit across active trade lanes',
      'Guidance on import licensing and controlled goods procedures'
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
      'Sanctions and export controls have expanded significantly across major trading jurisdictions, with material implications for supply chain sourcing, counterparty relationships, and payment flows. The pace of change makes static compliance programs inadequate.',
      'Organizations operating internationally need a clear view of applicable regimes, screening obligations, and how controls interact across the jurisdictions in which they operate. Sanctions exposure is not confined to direct dealings — it extends to indirect counterparty relationships and supply chain intermediaries.'
    ],
    commonRisks: [
      'Dealings with sanctioned parties through intermediary or correspondent relationships',
      'Export of dual-use goods or technology without required authorization',
      'Failure to screen across multiple applicable regimes simultaneously',
      'Supply chain sourcing from restricted jurisdictions or entities'
    ],
    howWeHelp: [
      'Sanctions screening program review and jurisdictional gap analysis',
      'Export control classification for goods, technology, and software',
      'Counterparty and supply chain due diligence frameworks',
      'License application support and regulatory authorization guidance'
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
      'Free trade agreements create market access opportunities, but realizing those benefits requires careful attention to rules of origin, documentation, and qualifying conditions. Preferential treatment is not automatic — it must be claimed and substantiated.',
      'Organizations sourcing, manufacturing, or exporting internationally should understand how applicable agreements affect their cost structure, compliance obligations, and competitive position. Agreement benefits can shift significantly with changes to supply chain configuration.'
    ],
    commonRisks: [
      'Claiming preferential tariff treatment without qualifying rules of origin',
      'Failure to document origin claims adequately for audit purposes',
      'Supply chain changes invalidating previously qualifying origin determinations',
      'Missing preferential rate opportunities due to insufficient agreement awareness'
    ],
    howWeHelp: [
      'Rules of origin analysis for applicable FTAs and supply chain configurations',
      'Origin documentation and record-keeping program design',
      'Agreement applicability review for new markets or sourcing arrangements',
      'Support for certificate of origin processes and preferential duty claims'
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
      'Transfer pricing applies wherever related entities transact across borders — and the intersection with customs valuation, trade finance, and supply chain structures creates compounding complexity. Pricing that satisfies one jurisdiction\'s requirements may create exposure in another.',
      'Organizations with intercompany trade flows need consistent, defensible transfer pricing that accounts for trade terms, logistics, risk allocation, and jurisdictional requirements. Documentation must hold up under audit across multiple authorities simultaneously.'
    ],
    commonRisks: [
      'Transfer prices inconsistent with arm\'s-length standards triggering adjustments',
      'Customs valuation and transfer pricing positions that conflict under audit',
      'Inadequate contemporaneous documentation for intercompany trade transactions',
      'Profit allocation that does not align with functional analysis and risk assumption'
    ],
    howWeHelp: [
      'Transfer pricing policy design for intercompany trade and service arrangements',
      'Customs-transfer pricing alignment analysis to reduce dual-adjustment risk',
      'Documentation preparation and benchmarking for cross-border transactions',
      'Support for advance pricing arrangements and competent authority proceedings'
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
      'Trade-based money laundering is a recognized compliance risk, and AML obligations increasingly apply across documentary trade instruments, open-account payments, and supply chain finance structures. Regulators in multiple jurisdictions have signaled heightened scrutiny of trade finance activity.',
      'Organizations operating cross-border payment flows and trade finance arrangements need a clear view of applicable AML frameworks and how they interact with trade documentation and counterparty relationships. Gaps in program coverage can create both regulatory and correspondent banking risk.'
    ],
    commonRisks: [
      'Documentary irregularities in trade instruments indicating value manipulation',
      'Counterparty or beneficial ownership gaps in trade finance due diligence',
      'Correspondent banking relationships affected by trade finance AML deficiencies',
      'Inconsistent transaction monitoring across trade and payment flows'
    ],
    howWeHelp: [
      'AML program review for trade finance and cross-border payment operations',
      'Trade-based money laundering risk assessment and control design',
      'Counterparty due diligence frameworks for trade finance counterparties',
      'Regulatory mapping across applicable AML regimes for multi-jurisdictional operations'
    ],
    relatedTopics: [authorityLinks[1], authorityLinks[2], authorityLinks[3]],
    insightLinks
  }
};
