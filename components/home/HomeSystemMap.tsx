import { site } from '@/lib/site';

export function HomeSystemMap() {
  const { systemMap } = site;
  return (
    <section id="system-map" className="relative not-prose scroll-mt-[72px]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
              {systemMap.eyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-ink md:text-4xl">
              {systemMap.heading}
            </h2>
            <p className="mt-4 text-lg text-brand-text">{systemMap.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {systemMap.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border border-brand-border bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-ink">{pillar.title}</h3>
                <p className="mt-2 text-brand-text">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
