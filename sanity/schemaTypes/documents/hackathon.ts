import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hackathon',
  title: 'Hackathon',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'organiser', title: 'Organiser', type: 'string' }),
    defineField({ name: 'role', title: 'Role (Participant / Winner / Finalist)', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'projectUrl', title: 'Project / Repo Link', type: 'url' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'organiser', media: 'image' } },
});
