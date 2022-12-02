import { FaCity } from '@react-icons/all-files/fa/FaCity';
import { defineType } from 'sanity';

export default defineType({
  name: 'commercialProperty',
  title: 'Commercial Properties',
  icon: FaCity,
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
      name: 'buildDate',
      title: 'Year built',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      group: 'propertyInfo',
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
