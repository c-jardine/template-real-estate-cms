import { defineType } from 'sanity';
import { FaUser } from '@react-icons/all-files/fa/FaUser';

export default defineType({
  name: 'realtor',
  title: 'Realtors',
  icon: FaUser,
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'name',
        slugify: (input: string) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule: any) => Rule.required(),
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contactInfo',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'contactInfo.email',
      media: 'image',
    },
  },
});
