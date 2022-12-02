import { GiHighGrass } from '@react-icons/all-files/gi/GiHighGrass';
import { defineType } from 'sanity';

export default defineType({
  name: 'landProperty',
  title: 'Land Properties',
  icon: GiHighGrass,
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
