# Sumaita Islam — Portfolio

A minimal, premium, CMS-driven personal portfolio. Built with Next.js 15 (App
Router), TypeScript, Tailwind, Framer Motion, React Three Fiber, Lenis smooth
scroll, and Sanity CMS as the single source of truth for every piece of
content on the site.

The site renders sensible fallback content (sourced from the resume brief)
out of the box, so it looks complete even before Sanity Studio has been
filled in — every fallback is replaced automatically the moment a real
document is published.

---

## Tech stack

- **Next.js 15** (App Router, TypeScript, ISR via `revalidate`)
- **Tailwind CSS** + design tokens matching the brief's palette
- **Framer Motion** for page/section/element animation
- **GSAP** (installed, ready for any scroll-triggered choreography beyond
  what Framer Motion covers)
- **React Three Fiber / Three.js** for the subtle 3D hero element
- **Lenis** for smooth scrolling
- **Sanity CMS** (embedded Studio at `/studio`, no separate deploy needed)
- **Lucide** icons

## Project structure

```
app/                      Routes (App Router)
  layout.tsx               Root layout, fonts, dynamic SEO metadata
  page.tsx                 Homepage — fetches all Sanity content, composes sections
  globals.css               Design tokens, reduced-motion support
  sitemap.ts / robots.ts    SEO
  not-found.tsx             Custom 404
  studio/[[...tool]]/        Embedded Sanity Studio at /studio

components/                 All UI sections + shared primitives
  three/HeroScene.tsx        R3F wireframe hero element

lib/
  sanity/client.ts           Sanity client + safe fetch helper
  sanity/image.ts             Image URL builder
  sanity/queries.ts           All GROQ queries
  fallback-content.ts         Default content (from the resume) used until Sanity has data
  utils.ts                    cn() class helper

sanity/
  schemaTypes/                All 19 document schemas + 4 reusable objects
sanity.config.ts             Studio configuration
```

## Sanity schemas

Every section listed in the brief has its own schema: Hero, About,
Education, Experience, Skill Category, Project, Service, Certificate,
Hackathon, Achievement, Resume, Social Link, Contact, Testimonial, Gallery
Item, Blog Post, Site Settings, Navigation, Footer — plus shared SEO, Link,
Technology, and Attachment objects. Nothing is hardcoded in components;
everything is fetched from Sanity at request time with a 60-second
revalidation window.

`Site Settings → Enable/Disable Sections` lets you toggle any homepage
section on or off without touching code.

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a Sanity project** (if you don't have one yet)

   ```bash
   npx sanity@latest init
   ```

   This gives you a Project ID and lets you pick a dataset (use
   `production`).

3. **Environment variables** — copy `.env.example` to `.env.local` and fill
   in your values:

   ```bash
   cp .env.example .env.local
   ```

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
   SANITY_API_READ_TOKEN=         # optional, only needed for private datasets
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Run the site**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` for the site and
   `http://localhost:3000/studio` for the CMS — both run from the same Next.js
   process, no separate Studio deployment required.

5. **Add your content** in Studio: start with Site Settings, Hero, Contact,
   and Resume, then fill in Education, Skills, Projects, Certificates,
   Hackathons, and Achievements. Everything updates on the live site within
   60 seconds (or instantly on next request in dev).

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Add the same environment variables from `.env.local` to the Vercel
   project's Environment Variables settings.
4. Deploy. `vercel.json` is already configured for the Next.js framework
   preset.
5. (Optional) Run `npx sanity cors add https://yourdomain.com` so the
   deployed site is allowed to query your Sanity dataset.

No separate Sanity hosting step is required — the Studio is embedded and
deploys with the rest of the app at `/studio`. If you'd prefer a
Studio hosted on `sanity.studio`, run `npm run studio:deploy`.

## Notes on the 3D / animation layer

- The hero's 3D element (`components/three/HeroScene.tsx`) is intentionally
  light: one wireframe icosahedron and ~60 ambient points, no
  postprocessing — kept that way to protect Lighthouse performance scores.
- All scroll-reveal animation goes through the shared `<FadeIn>` primitive so
  motion feels consistent rather than effect-of-the-week.
- `prefers-reduced-motion` is respected globally: Lenis smoothing is skipped
  and CSS animation durations collapse to near-zero for users who've
  requested less motion.
- The custom cursor and 3D scene only activate on devices that report
  hover + fine pointer support, so touch devices get the native experience.

## Extending

- **Blog / Gallery / Testimonials**: schemas exist and are ready; wire up a
  `components/Blog.tsx` / `Gallery.tsx` / `Testimonials.tsx` the same way the
  other sections are wired in `app/page.tsx` when you're ready to use them.
- **Contact form backend**: `components/Contact.tsx` submits client-side
  only. Connect it to your endpoint of choice (Resend, Formspree, a Next.js
  Route Handler) inside `handleSubmit`.
