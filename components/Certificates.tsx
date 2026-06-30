'use client';

import { Award, Download } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackCertificates } from '@/lib/fallback-content';

type Certificate = {
  _id: string;
  title: string;
  issuer?: string;
  issueDate?: string;
  certificateFile?: { asset?: { url?: string } };
  credentialUrl?: string;
};

export default function Certificates({ items }: { items?: Certificate[] | null }) {
  const list = items && items.length > 0 ? items : (fallbackCertificates as Certificate[]);

  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Credentials" title="Certificates" />

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((cert, i) => (
            <FadeIn key={cert._id} delay={i * 0.06}>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-border p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Award size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-base tracking-tight">{cert.title}</h3>
                    <p className="text-sm text-secondary">
                      {cert.issuer}
                      {cert.issueDate ? ` · ${new Date(cert.issueDate).getFullYear()}` : ''}
                    </p>
                  </div>
                </div>

                {(cert.certificateFile?.asset?.url || cert.credentialUrl) && (
                  <a
                    href={cert.certificateFile?.asset?.url || cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    aria-label={`Download ${cert.title} certificate`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <Download size={15} />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
