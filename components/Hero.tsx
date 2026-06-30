'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import { urlForImage } from '@/lib/sanity/image';
import { fallbackHero } from '@/lib/fallback-content';

const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

type HeroData = {
  greeting?: string;
  name?: string;
  roles?: string[];
  shortDescription?: string;
  profileImage?: any;
  resumeFile?: { asset?: { url?: string } };
};

function TypingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;
    const current = roles[index % roles.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-accent">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle h-[1em]" />
    </span>
  );
}

export default function Hero({ data }: { data?: HeroData | null }) {
  const hero = data ?? fallbackHero;
  const roles = hero.roles && hero.roles.length > 0 ? hero.roles : fallbackHero.roles;
  const imageUrl = data?.profileImage ? urlForImage(data.profileImage)?.width(640).height(800).url() : undefined;
  const resumeUrl = data?.resumeFile?.asset?.url;

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 -z-0 hidden md:block">
        <HeroScene />
      </div>

      <div className="section-container grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-base text-secondary"
          >
            {hero.greeting || "Hi, I'm"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            {hero.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 font-display text-2xl tracking-tight text-secondary md:text-3xl"
          >
            <TypingRoles roles={roles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-lg text-base text-secondary md:text-lg"
          >
            {hero.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {resumeUrl && (
              <a
                href={resumeUrl}
                download
                data-cursor
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
              >
                <Download size={16} /> Download Resume
              </a>
            )}
            <a
              href="#contact"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border md:max-w-none"
          >
            <Image src={imageUrl} alt={hero.name || 'Profile photo'} fill className="object-cover" priority />
          </motion.div>
        )}
      </div>

      <motion.a
        href="#about"
        data-cursor
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
