import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'issuer', title: 'Awarding Body / Institution', type: 'string' }),
    defineField({ name: 'value', title: 'Value (e.g. BDT 200,000)', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (lucide name)', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
