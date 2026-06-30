import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'authorName', title: 'Author Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'authorRole', title: 'Author Role / Company', type: 'string' }),
    defineField({ name: 'authorImage', title: 'Author Photo', type: 'image' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
