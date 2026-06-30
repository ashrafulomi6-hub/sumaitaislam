'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackSkillCategories } from '@/lib/fallback-content';

type Skill = { name: string; proficiency?: number };
type SkillCategory = { _id: string; title: string; skills?: Skill[] };

export default function Skills({ categories }: { categories?: SkillCategory[] | null }) {
  const list = categories && categories.length > 0 ? categories : (fallbackSkillCategories as SkillCategory[]);

  return (
    <section id="skills" className="bg-primary/[0.02] py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="Technologies and tools I use to design, build, and reason about software."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((category, i) => (
            <FadeIn key={category._id} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-background p-6 md:p-8">
                <h3 className="font-display text-lg tracking-tight">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(category.skills || []).map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ y: -2, borderColor: 'var(--color-accent)' }}
                      className="rounded-full border border-border px-4 py-1.5 text-sm text-secondary transition-colors"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
