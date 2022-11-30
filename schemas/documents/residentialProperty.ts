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
      name: 'community',
      title: 'Community',
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
      name: 'includedUtilities',
      title: 'Included utilities',
      type: 'array',
      group: 'propertyInfo',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Water', value: 'Water' },
          { title: 'Trash', value: 'Trash' },
          { title: 'Gas', value: 'Gas' },
          { title: 'Electric', value: 'Electric' },
          { title: 'Internet', value: 'Internet' },
          { title: 'TV', value: 'TV' },
        ],
        layout: 'grid',
      },
      hidden: ({ parent }: { parent: PropertyProps }) =>
        parent?.listing?.for !== 'rental',
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
      name: 'features',
      title: 'Features',
      type: 'residentialPropertyFeatures',
      group: 'propertyInfo',
    },
    {
      name: 'community',
      title: 'Community',
      type: 'residentialPropertyCommunity',
      group: 'community',
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
