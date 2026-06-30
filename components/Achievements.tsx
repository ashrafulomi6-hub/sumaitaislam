'use client';

import { Trophy } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackAchievements } from '@/lib/fallback-content';

type Achievement = { _id: string; title: string; issuer?: string; value?: string; description?: string };

export default function Achievements({ items }: { items?: Achievement[] | null }) {
  const list = items && items.length > 0 ? items : (fallbackAchievements as Achievement[]);

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="grid gap-4 md:grid-cols-3">
          {list.map((item, i) => (
            <FadeIn key={item._id} delay={i * 0.06}>
              <div className="rounded-xl border border-border p-6 text-center">
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Trophy size={18} />
                </span>
                <h3 className="font-display text-base tracking-tight">{item.title}</h3>
                {item.value && <p className="mt-2 text-xl font-semibold text-accent">{item.value}</p>}
                {item.issuer && <p className="mt-1 text-sm text-secondary">{item.issuer}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
