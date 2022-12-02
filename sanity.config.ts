import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import {
  unsplashAssetSource,
  unsplashImageAsset,
} from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';
import {
  FaqStructure,
  PropertiesStructure,
  SettingsStructure,
} from './src/lib/sanity/structureBuilder';
import { schemaTypes } from './src/schemas';
import {
  commercialPropertyType,
  faqType,
  landPropertyType,
  residentialPropertyType,
  settingsType,
} from './src/schemas/documents';

// @TODO: update next-sanity/studio to automatically set this when needed
const basePath = '/studio';

const config = defineConfig({
  basePath,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Blog Admin',
  schema: {
    // If you want more content types, you can add them to this array
    types: schemaTypes,
  },
  plugins: [
    deskTool({
      structure: (S) => {
        // Custom structures
        const properties = PropertiesStructure(S);
        const faq = FaqStructure(S);
        const settings = SettingsStructure(S);

        const defaultListItems = S.documentTypeListItems().filter(
          (listItem) =>
            listItem.getId() !== residentialPropertyType.name &&
            listItem.getId() !== commercialPropertyType.name &&
            listItem.getId() !== landPropertyType.name &&
            listItem.getId() !== faqType.name &&
            listItem.getId() !== settingsType.name
        );

        return S.list()
          .title('Content')
          .items([properties, ...defaultListItems, faq, S.divider(), settings]);
      },
    }),
    unsplashImageAsset(),
    visionTool({
      defaultApiVersion: '2022-08-08',
    }),
  ],

  formBuilder: {
    image: {
      assetSources: (previousAssetSources, { schema }) => {
        if (schema.name === 'movie-image') {
          // remove unsplash from movie-image types
          return previousAssetSources.filter(
            (assetSource) => assetSource !== unsplashAssetSource
          );
        }
        return previousAssetSources;
      },
    },
  },

  // document: {
  //   productionUrl: async (prev, { document }) => {
  //     const url = new URL('/api/preview', location.origin);
  //     const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET;
  //     if (secret) {
  //       url.searchParams.set('secret', secret);
  //     }

  //     try {
  //       switch (document._type) {
  //         case settingsType.name:
  //           break;
  //         case postType.name:
  //           url.searchParams.set('slug', (document.slug as Slug).current!);
  //           break;
  //         default:
  //           return prev;
  //       }
  //       return url.toString();
  //     } catch {
  //       return prev;
  //     }
  //   },
  // Hide 'Settings' from new document options
  // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
  // newDocumentOptions: (prev, { creationContext }) => {
  //   if (creationContext.type === 'global') {
  //     return prev.filter(
  //       (templateItem) =>
  //         templateItem.templateId !== settingsType.name &&
  //         templateItem.templateId !== homePageType.name &&
  //         templateItem.templateId !== brandType.name &&
  //         templateItem.templateId !== socialsType.name
  //     );
  //   }

  //   return prev;
  // },
  // Removes the "duplicate" action on the "settings" singleton
  // actions: (prev, { schemaType }) => {
  //   if (schemaType === settingsType.name) {
  //     return prev.filter(({ action }) => action !== 'duplicate');
  //   }

  //   return prev;
  // },
  // },
});

export default config;
