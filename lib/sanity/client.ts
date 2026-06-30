import { createClient } from '@sanity/client';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'published',
});

/**
 * Generic fetch helper with graceful fallback so the site never hard-crashes
 * if Sanity is unreachable or a document hasn't been created yet.
 */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return null;
  }
}
