'use client';

import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackEducation } from '@/lib/fallback-content';

type EduItem = {
  _id: string;
  institution: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  isOngoing?: boolean;
  grade?: string;
  description?: string;
};

function formatYear(date?: string) {
  if (!date) return '';
  return new Date(date).getFullYear().toString();
}

export default function Education({ items }: { items?: EduItem[] | null }) {
  const list = items && items.length > 0 ? items : (fallbackEducation as EduItem[]);

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="relative border-l border-border pl-8 md:pl-10">
          {list.map((item, i) => (
            <FadeIn key={item._id} delay={i * 0.08} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[41px] top-1 h-2.5 w-2.5 rounded-full bg-accent md:-left-[49px]" />
              <p className="text-sm text-secondary">
                {formatYear(item.startDate)} — {item.isOngoing ? 'Present' : formatYear(item.endDate)}
              </p>
              <h3 className="mt-1 font-display text-xl tracking-tight text-primary md:text-2xl">
                {item.institution}
              </h3>
              {item.degree && <p className="mt-1 text-secondary">{item.degree}</p>}
              {item.grade && <p className="mt-1 text-sm text-accent">GPA: {item.grade}</p>}
              {item.description && <p className="mt-2 max-w-2xl text-sm text-secondary">{item.description}</p>}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
