import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'greeting', title: 'Greeting (e.g. "Hi, I\'m")', type: 'string' }),
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'roles',
      title: 'Rotating Roles (for typing animation)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Web Designer, ML & AI Enthusiast, Programming Learner',
    }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'profileImage', title: 'Professional Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'resumeFile', title: 'Resume PDF (for hero download CTA)', type: 'file' }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Href', type: 'string' }),
            defineField({ name: 'style', title: 'Style', type: 'string', options: { list: ['primary', 'secondary'] } }),
          ],
        },
      ],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
});
