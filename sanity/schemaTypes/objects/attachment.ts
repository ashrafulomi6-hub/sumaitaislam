import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'attachment',
  title: 'Attachment',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'file', title: 'File', type: 'file' }),
  ],
});
