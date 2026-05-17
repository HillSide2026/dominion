import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeSystemMap } from '@/components/home/HomeSystemMap';
import { HomePracticeAreas } from '@/components/home/HomePracticeAreas';
import { HomeIndustries } from '@/components/home/HomeIndustries';
import { HomeInsightsPreview } from '@/components/home/HomeInsightsPreview';
import { HomeGuideCTA } from '@/components/home/HomeGuideCTA';
import { HomeFinalCTA } from '@/components/home/HomeFinalCTA';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description
};

export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <HomeSystemMap />
      <HomePracticeAreas />
      <HomeIndustries />
      <HomeInsightsPreview />
      <HomeGuideCTA />
      <HomeFinalCTA />
    </main>
  );
}
