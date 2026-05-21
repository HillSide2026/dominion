import type { Metadata } from 'next';
import { AuthorityPageTemplate } from '@/components/authority/AuthorityPageTemplate';
import { authorityPages } from '@/lib/authority-pages';

const page = authorityPages['trade-agreements'];

export const metadata: Metadata = {
  title: `${page.title} | Dominion Partners`,
  description: page.description
};

export default function Page() {
  return <AuthorityPageTemplate page={page} />;
}
