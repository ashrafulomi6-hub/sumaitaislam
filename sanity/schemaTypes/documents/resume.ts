import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Resume' }),
    defineField({ name: 'file', title: 'Resume PDF', type: 'file', validation: (r) => r.required() }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
    defineField({ name: 'showPreview', title: 'Show Embedded Preview', type: 'boolean', initialValue: true }),
  ],
});
