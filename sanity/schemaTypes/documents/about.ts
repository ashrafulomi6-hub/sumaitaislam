import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'story', title: 'Professional Story', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'mission', title: 'Mission', type: 'text', rows: 3 }),
    defineField({ name: 'careerGoals', title: 'Career Goals', type: 'text', rows: 3 }),
    defineField({ name: 'interests', title: 'Interests', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'stats',
      title: 'Animated Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'number' }),
            defineField({ name: 'suffix', title: 'Suffix (e.g. +, %)', type: 'string' }),
          ],
        },
      ],
    }),
  ],
});
