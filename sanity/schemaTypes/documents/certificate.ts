import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'issuer', title: 'Issuing Organisation', type: 'string' }),
    defineField({ name: 'issueDate', title: 'Issue Date', type: 'date' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Certificate Image / Thumbnail', type: 'image' }),
    defineField({ name: 'certificateFile', title: 'Downloadable Certificate (PDF)', type: 'file' }),
    defineField({ name: 'credentialUrl', title: 'Credential Verification URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'issuer', media: 'image' } },
});
