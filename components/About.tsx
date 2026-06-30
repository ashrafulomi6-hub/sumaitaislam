'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { urlForImage } from '@/lib/sanity/image';

type Stat = { label: string; value: number; suffix?: string };

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-primary md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About({
  data,
}: {
  data?: {
    title?: string;
    story?: any;
    mission?: string;
    image?: any;
    stats?: Stat[];
  } | null;
}) {
  const imageUrl = data?.image ? urlForImage(data.image)?.width(800).height(900).url() : undefined;
  const stats: Stat[] = data?.stats?.length
    ? data.stats
    : [
        { label: 'Projects built', value: 5, suffix: '+' },
        { label: 'Technologies', value: 15, suffix: '+' },
        { label: 'GPA at SSC/HSC', value: 5, suffix: '.00' },
      ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title={data?.title || 'A bit about me'}
          description={
            data?.mission ||
            "I'm a Computer Science student exploring the intersection of design, machine learning, and modern web development — building things that feel as good to use as they look."
          }
        />

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          {imageUrl ? (
            <FadeIn>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
                <Image src={imageUrl} alt="About" fill className="object-cover" />
              </div>
            </FadeIn>
          ) : (
            <div />
          )}

          <div>
            {data?.story ? (
              <FadeIn delay={0.1} className="prose max-w-none text-secondary">
                <PortableText value={data.story} />
              </FadeIn>
            ) : (
              <FadeIn delay={0.1}>
                <p className="text-secondary">
                  My journey into technology started with curiosity about how digital experiences are built — and
                  grew into a focus on clean front-end engineering and applied machine learning. I care about
                  craft: every interaction should feel intentional, and every interface should feel calm.
                </p>
              </FadeIn>
            )}

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.1 + i * 0.1}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-sm text-secondary">{stat.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
