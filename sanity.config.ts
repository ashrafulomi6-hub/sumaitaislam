import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'sumaita-portfolio-studio',
  title: 'Sumaita Islam — Portfolio CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem().title('Navigation').child(S.document().schemaType('navigation').documentId('navigation')),
            S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),
            S.listItem().title('Contact').child(S.document().schemaType('contact').documentId('contact')),
            S.listItem().title('Resume').child(S.document().schemaType('resume').documentId('resume')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !['siteSettings', 'navigation', 'footer', 'contact', 'resume'].includes(item.getId() ?? '')
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
