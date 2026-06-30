import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'favicon', title: 'Favicon', type: 'image' }),
    defineField({
      name: 'themeColors',
      title: 'Theme Colors',
      type: 'object',
      fields: [
        defineField({ name: 'primary', title: 'Primary', type: 'string', initialValue: '#111111' }),
        defineField({ name: 'secondary', title: 'Secondary', type: 'string', initialValue: '#666666' }),
        defineField({ name: 'accent', title: 'Accent', type: 'string', initialValue: '#2563EB' }),
        defineField({ name: 'background', title: 'Background', type: 'string', initialValue: '#FFFFFF' }),
        defineField({ name: 'border', title: 'Border', type: 'string', initialValue: '#EAEAEA' }),
      ],
    }),
    defineField({ name: 'defaultSeo', title: 'Default SEO', type: 'seo' }),
    defineField({
      name: 'sectionToggles',
      title: 'Enable / Disable Sections',
      type: 'object',
      fields: [
        'hero', 'about', 'education', 'experience', 'projects', 'skills',
        'services', 'certificates', 'hackathons', 'achievements', 'resume',
        'testimonials', 'gallery', 'blog', 'contact',
      ].map((name) =>
        defineField({ name, title: name.charAt(0).toUpperCase() + name.slice(1), type: 'boolean', initialValue: true })
      ),
    }),
  ],
});
