import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['LinkedIn', 'GitHub', 'Facebook', 'Instagram', 'Twitter', 'Other'] } }),
    defineField({ name: 'url', title: 'URL', type: 'url', validation: (r) => r.required() }),
    defineField({ name: 'icon', title: 'Icon (lucide name)', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
