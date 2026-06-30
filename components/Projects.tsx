'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard, { ProjectData } from './ProjectCard';
import { fallbackProjects } from '@/lib/fallback-content';

export default function Projects({ projects }: { projects?: ProjectData[] | null }) {
  const list = projects && projects.length > 0 ? projects : (fallbackProjects as ProjectData[]);
  const [query, setQuery] = useState('');
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTech = useMemo(() => {
    const set = new Set<string>();
    list.forEach((p) => p.techStack?.forEach((t) => set.add(t.name)));
    return Array.from(set);
  }, [list]);

  const filtered = useMemo(() => {
    return list.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesTech = !activeTech || p.techStack?.some((t) => t.name === activeTech);
      return matchesQuery && matchesTech;
    });
  }, [list, query, activeTech]);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Selected Work" title="Projects" description="A few things I've designed and built." />

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTech(null)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                activeTech === null ? 'border-accent text-accent' : 'border-border text-secondary'
              }`}
            >
              All
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  activeTech === tech ? 'border-accent text-accent' : 'border-border text-secondary'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-secondary">No projects match your search.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
