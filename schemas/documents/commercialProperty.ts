import { defineType } from 'sanity';
import { PropertyProps } from '../../types';

export default defineType({
  name: 'residentialProperty',
  title: 'Residential Properties',
  type: 'document',
  groups: [
    {
      name: 'listingInfo',
      title: 'Listing Info',
      default: true,
    },
    {
      name: 'propertyInfo',
      title: 'Property Info',
    },
    {
      name: 'cardPreview',
      title: 'Card Preview',
    },
  ],
  fields: [
    {
      name: 'listing',
      title: 'Listing',
      type: 'listing',
      group: 'listingInfo',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single-family', value: 'singleFamily' },
          { title: 'Multi-family', value: 'multiFamily' },
          { title: 'Townhouse', value: 'townhouse' },
          { title: 'Condominium', value: 'condominium' },
        ],
      },
      group: 'propertyInfo',
    },
    {
      name: 'buildDate',
      title: 'Year built',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      group: 'propertyInfo',
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      group: 'propertyInfo',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'bathrooms',
      group: 'propertyInfo',
    },
    {
      name: 'garage',
      title: 'Garage',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Attached', value: 'attached' },
          { title: 'Detached', value: 'detached' },
        ],
      },
      group: 'propertyInfo',
    },
    {
      name: 'nearbySchools',
      title: 'Nearby schools',
      type: 'nearbySchools',
      group: 'propertyInfo',
    },
    {
      name: 'includedUtilities',
      title: 'Included utilities',
      type: 'includedUtilities',
      group: 'propertyInfo',
      hidden: ({ parent }: { parent: PropertyProps }) =>
        parent?.listing?.for !== 'rental',
    },
    {
      name: 'cardPreview',
      title: 'Card Preview',
      type: 'cardPreview',
      group: 'cardPreview',
    },
  ],
  preview: {
    select: {
      title: 'cardPreview.title',
      subtitle: 'listing.realtor.name',
      media: 'listing.gallery[0].asset',
    },
  },
});
