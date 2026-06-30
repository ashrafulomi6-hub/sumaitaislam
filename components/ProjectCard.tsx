'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { urlForImage } from '@/lib/sanity/image';

type TechItem = { name: string };
export type ProjectData = {
  _id: string;
  title: string;
  summary?: string;
  coverImage?: any;
  techStack?: TechItem[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({ project, index = 0 }: { project: ProjectData; index?: number }) {
  const imageUrl = project.coverImage ? urlForImage(project.coverImage)?.width(800).height(600).url() : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border border-border bg-background"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary/[0.03]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-sm text-secondary">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg tracking-tight">{project.title}</h3>
        {project.summary && <p className="mt-2 text-sm text-secondary">{project.summary}</p>}

        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech.name} className="rounded-full border border-border px-3 py-1 text-xs text-secondary">
                {tech.name}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-accent"
            >
              <Github size={15} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-accent"
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
