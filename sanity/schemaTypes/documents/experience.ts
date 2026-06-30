import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Role / Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'company', title: 'Company / Organisation', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
    defineField({ name: 'isCurrent', title: 'Current Role', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'logo', title: 'Company Logo', type: 'image' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'role', subtitle: 'company' } },
});
