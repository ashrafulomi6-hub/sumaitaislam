'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { fallbackContact } from '@/lib/fallback-content';

type ContactData = { email?: string; phone?: string; address?: string; availability?: string };

export default function Contact({ data }: { data?: ContactData | null }) {
  const contact = data ?? fallbackContact;
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hook this up to your form endpoint of choice (Formspree, Resend, etc).
    // Kept client-side only here so the template has no required backend.
    setStatus('sent');
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's work together"
          description={contact.availability || "I'm always open to discussing new projects and opportunities."}
        />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <FadeIn className="space-y-5">
            {contact.email && (
              <a href={`mailto:${contact.email}`} data-cursor className="flex items-center gap-3 text-secondary transition-colors hover:text-accent">
                <Mail size={16} /> {contact.email}
              </a>
            )}
            {contact.phone && (
              <a href={`tel:${contact.phone}`} data-cursor className="flex items-center gap-3 text-secondary transition-colors hover:text-accent">
                <Phone size={16} /> {contact.phone}
              </a>
            )}
            {contact.address && (
              <p className="flex items-center gap-3 text-secondary">
                <MapPin size={16} /> {contact.address}
              </p>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                data-cursor
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
              >
                <Send size={15} /> {status === 'sent' ? 'Message sent' : 'Send message'}
              </button>
              {status === 'sent' && <p className="text-sm text-accent">Thanks — I&apos;ll get back to you soon.</p>}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
