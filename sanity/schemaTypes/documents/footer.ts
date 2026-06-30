import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),
    defineField({ name: 'links', title: 'Quick Links', type: 'array', of: [{ type: 'link' }] }),
  ],
});
