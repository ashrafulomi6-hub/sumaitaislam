import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techStackItem',
  title: 'Technology',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'icon', title: 'Icon (image or lucide name)', type: 'string' }),
  ],
  preview: { select: { title: 'name' } },
});
