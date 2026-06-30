import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'summary', title: 'Short Summary (for card)', type: 'text', rows: 2 }),
    defineField({ name: 'coverImage', title: 'Project Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Additional Screenshots', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'video', title: 'Demo Video', type: 'file' }),
    defineField({ name: 'techStack', title: 'Technology Stack', type: 'array', of: [{ type: 'techStackItem' }] }),
    defineField({ name: 'githubUrl', title: 'GitHub Link', type: 'url' }),
    defineField({ name: 'liveUrl', title: 'Live Demo Link', type: 'url' }),
    defineField({ name: 'attachments', title: 'Attachments', type: 'array', of: [{ type: 'attachment' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', media: 'coverImage' },
  },
});
