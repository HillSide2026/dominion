import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Insights', href: getBlogPermalink() },
    { text: 'Payments', href: getPermalink('/payments') },
    { text: 'Lending', href: getPermalink('/lending') },
    { text: 'Investment', href: getPermalink('/investment') },
    { text: 'Insurance', href: getPermalink('/insurance') },
    { text: 'Infrastructure', href: getPermalink('/infrastructure') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'FINTRAC/MSB',
      links: [
        { text: 'FINTRAC/MSB Hub', href: getPermalink('/fintrac-compliance') },
        { text: 'MSB Registration', href: getPermalink('/msb-registration-canada') },
        { text: 'FINTRAC Compliance', href: getPermalink('/fintrac-compliance-canada') },
        { text: 'Audit & Penalties', href: getPermalink('/fintrac-audit-penalties') },
      ],
    },
    {
      title: 'Verticals',
      links: [
        { text: 'Payments', href: getPermalink('/payments') },
        { text: 'Lending', href: getPermalink('/lending') },
        { text: 'Investment', href: getPermalink('/investment') },
        { text: 'Insurance', href: getPermalink('/insurance') },
        { text: 'Infrastructure', href: getPermalink('/infrastructure') },
      ],
    },
    {
      title: 'Insights',
      links: [
        { text: 'Insights Hub', href: getBlogPermalink() },
        { text: 'MSB registration timeline', href: getPermalink('/insights/msb-registration-timeline-canada') },
        { text: 'FINTRAC penalties case study', href: getPermalink('/insights/fintrac-penalties-case-study') },
        { text: 'Stripe MSB risk in Canada', href: getPermalink('/insights/stripe-msb-risk-canada') },
      ],
    },
    {
      title: 'Site',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `Practical Canadian fintech legal and regulatory information.`,
};
