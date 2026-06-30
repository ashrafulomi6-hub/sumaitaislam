import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: Image | undefined) {
  if (!source?.asset) return undefined;
  return imageBuilder.image(source).auto('format').fit('max');
}
