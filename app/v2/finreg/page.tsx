import type { Metadata } from 'next';
import { VerticalPageTemplate } from '@/components/v2/VerticalPageTemplate';
import { verticalPages } from '@/lib/v2/vertical-pages';

const page = verticalPages['finreg'];

export const metadata: Metadata = {
  title: `${page.title} | Dominion Partners`,
  description: page.description
};

export default function Page() {
  return <VerticalPageTemplate page={page} />;
}
