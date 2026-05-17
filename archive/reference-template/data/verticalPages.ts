import { fintracClusterLinks } from '~/data/authorityPages';
import { getPermalink } from '~/utils/permalinks';

export interface VerticalCard {
  title: string;
  description: string;
}

export interface VerticalRelatedTopic {
  title: string;
  description: string;
  href: string;
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
  relatedTopics: VerticalRelatedTopic[];
  ctaText: string;
}

const insightsTopic = {
  title: 'Insights',
  description: 'Read practical Canadian fintech legal and regulatory analysis.',
  href: getPermalink('/insights'),
};

export const verticalPages: Record<string, VerticalPageData> = {
  lending: {
    slug: 'lending',
    eyebrow: 'Lending',
    title: 'Lending and Credit in Canada',
    description:
      'An overview of how lending products are structured in Canada and where legal and regulatory considerations typically arise.',
    audience:
      'Designed for fintech founders, product teams, and operators building credit or financing products.',
    practiceTitle: 'How Lending Works in Practice',
    practicePoints: [
      'Lending products range from direct credit to embedded financing.',
      'Banks, non-bank lenders, and platforms play different roles.',
      'Many fintech companies focus on origination, underwriting, or distribution.',
      'Regulation often depends on who provides the capital and who interfaces with the borrower.',
    ],
    modelsTitle: 'How Lending Products Are Built',
    models: [
      {
        title: 'Direct Lending',
        description: 'Providing credit directly to consumers or businesses using internal or external capital.',
      },
      {
        title: 'Marketplace Lending',
        description: 'Connecting borrowers with lenders or investors through a platform model.',
      },
      {
        title: 'Embedded Credit',
        description: 'Integrating financing into platforms such as e-commerce, SaaS, or marketplaces.',
      },
      {
        title: 'Buy Now, Pay Later',
        description: 'Short-term installment products integrated into checkout or purchase flows.',
      },
      {
        title: 'Revenue-Based Financing',
        description: 'Repayment structures tied to business revenue rather than fixed schedules.',
      },
      {
        title: 'Credit Facilitation',
        description: 'Supporting origination, underwriting, or servicing without acting as the lender.',
      },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText:
      'Regulatory considerations often arise around how credit is offered, disclosed, and serviced, as well as the roles of different entities in the lending structure.',
    relatedTopics: [
      insightsTopic,
      {
        title: fintracClusterLinks[4].title,
        description: fintracClusterLinks[4].description,
        href: fintracClusterLinks[4].href,
      },
      {
        title: fintracClusterLinks[5].title,
        description: fintracClusterLinks[5].description,
        href: fintracClusterLinks[5].href,
      },
    ],
    ctaText:
      'If you are building or scaling a lending product in Canada, early decisions around structure, capital, and user interaction can affect regulatory exposure and operational flexibility.',
  },
  investment: {
    slug: 'investment',
    eyebrow: 'Investment',
    title: 'Investment Platforms and Securities in Canada',
    description: 'An overview of how investment products are structured and regulated in Canada.',
    audience:
      'Designed for fintech teams building trading platforms, investment tools, or asset management products.',
    practiceTitle: 'How Investment Products Work',
    practicePoints: [
      'Investment platforms connect users to capital markets and financial products.',
      'Structures vary across brokerage, advisory, and asset management models.',
      'Regulation depends on activities such as trading, advising, or managing assets.',
      'Provincial securities regimes play a central role.',
    ],
    modelsTitle: 'How Investment Platforms Are Built',
    models: [
      {
        title: 'Brokerage Platforms',
        description: 'Enable users to buy and sell securities through self-directed accounts.',
      },
      {
        title: 'Robo-Advisors',
        description: 'Provide automated portfolio management based on user inputs and algorithms.',
      },
      {
        title: 'Investment Marketplaces',
        description: 'Connect investors with private or alternative investment opportunities.',
      },
      {
        title: 'Asset Management Tools',
        description: 'Support portfolio construction, monitoring, and management.',
      },
      {
        title: 'Crypto and Digital Assets',
        description: 'Offer access to digital asset trading, custody, or investment products.',
      },
      {
        title: 'Investment Infrastructure',
        description: 'Provide APIs or backend systems that enable investment functionality.',
      },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText:
      'Regulatory considerations typically arise when platforms facilitate trading, provide advice, manage assets, or hold client investments.',
    relatedTopics: [
      insightsTopic,
      {
        title: fintracClusterLinks[1].title,
        description: fintracClusterLinks[1].description,
        href: fintracClusterLinks[1].href,
      },
    ],
    ctaText:
      'If you are building an investment platform in Canada, product design and service scope will shape regulatory requirements and licensing considerations.',
  },
  insurance: {
    slug: 'insurance',
    eyebrow: 'Insurance',
    title: 'Insurance and Insurtech in Canada',
    description: 'An overview of how insurance products are structured and distributed in Canada.',
    audience: 'Designed for fintech and insurtech teams building or integrating insurance offerings.',
    practiceTitle: 'How Insurance Works in Practice',
    practicePoints: [
      'Insurance products are typically underwritten by licensed insurers.',
      'Distribution often occurs through brokers, agents, or digital platforms.',
      'Fintech companies frequently focus on user experience and distribution layers.',
      'Regulation depends on roles in underwriting, distribution, and advice.',
    ],
    modelsTitle: 'How Insurance Products Are Built',
    models: [
      {
        title: 'Digital Distribution Platforms',
        description: 'Enable users to compare, purchase, or manage insurance products online.',
      },
      {
        title: 'Embedded Insurance',
        description: 'Integrate insurance into platforms such as travel, e-commerce, or fintech products.',
      },
      {
        title: 'Brokerage and Advisory',
        description: 'Provide recommendations and access to insurance products.',
      },
      {
        title: 'Managing General Agents (MGAs)',
        description: 'Operate as intermediaries between insurers and distribution channels.',
      },
      {
        title: 'Usage-Based Insurance',
        description: 'Offer pricing based on behavior, data, or usage patterns.',
      },
      {
        title: 'Insurance Infrastructure',
        description: 'Provide technology for underwriting, claims, or policy management.',
      },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText:
      'Regulatory considerations often arise based on whether a platform is involved in distribution, advice, underwriting, or claims handling.',
    relatedTopics: [
      insightsTopic,
      {
        title: fintracClusterLinks[4].title,
        description: fintracClusterLinks[4].description,
        href: fintracClusterLinks[4].href,
      },
    ],
    ctaText:
      'If you are building or integrating insurance products in Canada, your role in distribution and customer interaction will influence regulatory requirements.',
  },
  infrastructure: {
    slug: 'infrastructure',
    eyebrow: 'Infrastructure',
    title: 'Financial Infrastructure and Embedded Finance in Canada',
    description: 'An overview of how financial infrastructure supports fintech products in Canada.',
    audience: 'Designed for teams building platforms, APIs, and embedded financial services.',
    practiceTitle: 'How Infrastructure Works in Practice',
    practicePoints: [
      'Many fintech products rely on underlying financial infrastructure providers.',
      'This includes banking partners, payment processors, and API platforms.',
      'Companies often separate frontend experience from backend financial services.',
      'Responsibilities are distributed across multiple entities.',
    ],
    modelsTitle: 'How Infrastructure Models Are Built',
    models: [
      {
        title: 'Banking as a Service',
        description: 'Provide access to banking capabilities through partner institutions and APIs.',
      },
      {
        title: 'Payments Infrastructure',
        description: 'Offer tools and systems to process, route, and manage payments.',
      },
      {
        title: 'API Platforms',
        description: 'Enable developers to integrate financial functionality into applications.',
      },
      {
        title: 'Embedded Finance Platforms',
        description: 'Allow non-financial companies to offer financial products within their services.',
      },
      {
        title: 'Custody and Safekeeping',
        description: 'Support holding and safeguarding of financial assets.',
      },
      {
        title: 'Data and Connectivity',
        description: 'Enable access to financial data and system integrations.',
      },
    ],
    regulationTitle: 'Where Regulation May Apply',
    regulationText:
      'Regulatory considerations depend on how responsibilities are shared between infrastructure providers, partners, and end-user platforms.',
    relatedTopics: [
      insightsTopic,
      {
        title: fintracClusterLinks[1].title,
        description: fintracClusterLinks[1].description,
        href: fintracClusterLinks[1].href,
      },
      {
        title: fintracClusterLinks[4].title,
        description: fintracClusterLinks[4].description,
        href: fintracClusterLinks[4].href,
      },
      {
        title: fintracClusterLinks[5].title,
        description: fintracClusterLinks[5].description,
        href: fintracClusterLinks[5].href,
      },
    ],
    ctaText:
      'If you are building financial infrastructure or embedded finance products in Canada, how responsibilities are allocated across partners will affect regulatory exposure and operational design.',
  },
};

export const getVerticalPage = (slug: keyof typeof verticalPages): VerticalPageData => verticalPages[slug];
