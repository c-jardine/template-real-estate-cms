import { format } from 'date-fns';
import { defineType } from 'sanity';

export default defineType({
  name: 'listing',
  title: 'Listing Information',
  type: 'object',
  fields: [
    {
      name: 'realtor',
      title: 'Realtor',
      type: 'reference',
      to: [{ type: 'realtor' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'listedOn',
      title: 'Date Listed',
      type: 'date',
      initialValue: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      name: 'for',
      title: 'For',
      type: 'string',
      options: {
        list: [
          { title: 'For sale', value: 'sale' },
          { title: 'For rent', value: 'rental' },
          { title: 'For lease', value: 'lease' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'price',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'size',
      title: 'Size',
      type: 'propertySize',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
