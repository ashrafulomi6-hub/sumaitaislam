import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';
import { sanityFetch } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { urlForImage } from '@/lib/sanity/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<any>(siteSettingsQuery);
  const seo = settings?.defaultSeo;
  const ogImageUrl = seo?.ogImage ? urlForImage(seo.ogImage)?.width(1200).height(630).url() : undefined;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: seo?.metaTitle || settings?.siteName || 'Sumaita Islam — Portfolio',
      template: `%s | ${settings?.siteName || 'Sumaita Islam'}`,
    },
    description:
      seo?.metaDescription ||
      'Web Designer, ML & AI Enthusiast, and Programming Learner — portfolio of Sumaita Islam.',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.metaTitle || settings?.siteName || 'Sumaita Islam — Portfolio',
      description: seo?.metaDescription || 'Web Designer, ML & AI Enthusiast, and Programming Learner.',
      url: siteUrl,
      siteName: settings?.siteName || 'Sumaita Islam',
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle || settings?.siteName || 'Sumaita Islam — Portfolio',
      description: seo?.metaDescription,
    },
    robots: seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: settings?.favicon ? { icon: urlForImage(settings.favicon)?.url() } : undefined,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
