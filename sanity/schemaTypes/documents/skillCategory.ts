import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  description: 'e.g. Frontend, Programming, Machine Learning, Other Skills',
  fields: [
    defineField({ name: 'title', title: 'Category Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'icon', title: 'Icon (lucide name)', type: 'string' }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon (lucide name or image)', type: 'string' }),
            defineField({ name: 'proficiency', title: 'Proficiency (0-100)', type: 'number' }),
          ],
        },
      ],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
