'use client';

import { Flag } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackHackathons } from '@/lib/fallback-content';

type Hackathon = { _id: string; title: string; organiser?: string; role?: string; date?: string; description?: string };

export default function Hackathons({ items }: { items?: Hackathon[] | null }) {
  const list = items && items.length > 0 ? items : (fallbackHackathons as Hackathon[]);

  return (
    <section id="hackathons" className="bg-primary/[0.02] py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Competitions" title="Hackathons" />

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((item, i) => (
            <FadeIn key={item._id} delay={i * 0.06}>
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Flag size={15} />
                  </span>
                  <h3 className="font-display text-base tracking-tight">{item.title}</h3>
                </div>
                {(item.organiser || item.role) && (
                  <p className="mt-3 text-sm text-secondary">
                    {item.role}
                    {item.organiser ? ` · ${item.organiser}` : ''}
                  </p>
                )}
                {item.description && <p className="mt-2 text-sm text-secondary">{item.description}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
