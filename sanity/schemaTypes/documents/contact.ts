import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'availability', title: 'Availability note (e.g. "Open to opportunities")', type: 'string' }),
    defineField({ name: 'formRecipientEmail', title: 'Contact Form Recipient Email', type: 'string' }),
  ],
});
