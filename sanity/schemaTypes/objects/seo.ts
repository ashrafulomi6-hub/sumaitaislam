import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
    defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'noIndex', title: 'Hide from search engines', type: 'boolean', initialValue: false }),
  ],
});
