import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Hackathons from '@/components/Hackathons';
import Achievements from '@/components/Achievements';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/lib/sanity/client';
import {
  siteSettingsQuery,
  navigationQuery,
  footerQuery,
  heroQuery,
  aboutQuery,
  educationQuery,
  skillCategoriesQuery,
  projectsQuery,
  certificatesQuery,
  hackathonsQuery,
  achievementsQuery,
  resumeQuery,
  socialLinksQuery,
  contactQuery,
} from '@/lib/sanity/queries';

export const revalidate = 60;

export default async function Home() {
  const [
    settings,
    navigation,
    footer,
    hero,
    about,
    education,
    skillCategories,
    projects,
    certificates,
    hackathons,
    achievements,
    resume,
    socialLinks,
    contact,
  ] = await Promise.all([
    sanityFetch<any>(siteSettingsQuery),
    sanityFetch<any>(navigationQuery),
    sanityFetch<any>(footerQuery),
    sanityFetch<any>(heroQuery),
    sanityFetch<any>(aboutQuery),
    sanityFetch<any[]>(educationQuery),
    sanityFetch<any[]>(skillCategoriesQuery),
    sanityFetch<any[]>(projectsQuery),
    sanityFetch<any[]>(certificatesQuery),
    sanityFetch<any[]>(hackathonsQuery),
    sanityFetch<any[]>(achievementsQuery),
    sanityFetch<any>(resumeQuery),
    sanityFetch<any[]>(socialLinksQuery),
    sanityFetch<any>(contactQuery),
  ]);

  const toggles = settings?.sectionToggles ?? {};
  const show = (key: string) => toggles[key] !== false;

  return (
    <main>
      <Navbar items={navigation?.items} />
      {show('hero') && <Hero data={hero} />}
      {show('about') && <About data={about} />}
      {show('education') && <Education items={education} />}
      {show('skills') && <Skills categories={skillCategories} />}
      {show('projects') && <Projects projects={projects} />}
      {show('certificates') && <Certificates items={certificates} />}
      {show('hackathons') && <Hackathons items={hackathons} />}
      {show('achievements') && <Achievements items={achievements} />}
      {show('resume') && <Resume data={resume} />}
      {show('contact') && <Contact data={contact} />}
      <Footer links={socialLinks} tagline={footer?.tagline} />
    </main>
  );
}
