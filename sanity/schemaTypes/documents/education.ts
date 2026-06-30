import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'institution', title: 'Institution', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'degree', title: 'Degree / Programme', type: 'string' }),
    defineField({ name: 'fieldOfStudy', title: 'Field of Study', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date (leave blank if ongoing)', type: 'date' }),
    defineField({ name: 'isOngoing', title: 'Currently Studying', type: 'boolean', initialValue: false }),
    defineField({ name: 'grade', title: 'Grade / GPA', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Institution Logo', type: 'image' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'institution', subtitle: 'degree' },
  },
});
