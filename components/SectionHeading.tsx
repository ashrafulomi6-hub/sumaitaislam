'use client';

import FadeIn from './FadeIn';

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl tracking-tight text-primary md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-secondary md:text-lg">{description}</p>}
    </FadeIn>
  );
}
