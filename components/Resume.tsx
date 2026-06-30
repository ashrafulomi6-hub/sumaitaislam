'use client';

import { Download, FileText } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

type ResumeData = {
  file?: { asset?: { url?: string; originalFilename?: string } };
  showPreview?: boolean;
  lastUpdated?: string;
};

export default function Resume({ data }: { data?: ResumeData | null }) {
  const url = data?.file?.asset?.url;

  return (
    <section id="resume" className="bg-primary/[0.02] py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="CV" title="Resume" description="A snapshot of my education, skills, and experience." />

        {url ? (
          <FadeIn>
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              {data?.showPreview !== false && (
                <iframe src={`${url}#view=fitH`} title="Resume preview" className="h-[600px] w-full" />
              )}
              <div className="flex items-center justify-between gap-4 border-t border-border p-5">
                <div className="flex items-center gap-3">
                  <FileText size={16} className="text-accent" />
                  <span className="text-sm text-secondary">
                    {data?.lastUpdated
                      ? `Updated ${new Date(data.lastUpdated).toLocaleDateString()}`
                      : 'Latest version'}
                  </span>
                </div>
                <a
                  href={url}
                  download
                  data-cursor
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-85"
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="rounded-xl border border-dashed border-border p-10 text-center text-secondary">
              Resume PDF hasn&apos;t been uploaded in Sanity Studio yet.
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
