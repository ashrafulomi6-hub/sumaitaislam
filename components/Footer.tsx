'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { fallbackSocialLinks } from '@/lib/fallback-content';

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

type SocialLink = { _id: string; platform: string; url: string; icon?: string };

export default function Footer({ links, tagline }: { links?: SocialLink[] | null; tagline?: string }) {
  const socials = links && links.length > 0 ? links : fallbackSocialLinks;

  return (
    <footer className="relative overflow-hidden border-t border-border py-16">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-2xl tracking-tight">
              {tagline || "Let's build something elegant."}
            </p>
            <p className="mt-2 text-sm text-secondary">© {new Date().getFullYear()} Sumaita Islam. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => {
              const Icon = iconMap[(s.icon || s.platform || '').toLowerCase()] ?? Github;
              return (
                <motion.a
                  key={s._id}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  whileHover={{ y: -3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  aria-label={s.platform}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
            <motion.a
              href="#hero"
              data-cursor
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
