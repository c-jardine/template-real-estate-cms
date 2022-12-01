import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PropertyProps } from './property.types';
import { SocialLinksProps } from './socialLinks.types';

export interface RealtorProps {
  _type: 'realtor';
  slug: { current: string };
  name: string;
  bio: string;
  image: SanityImageSource;
  contactInfo: {
    email: string;
    phone: string;
    socialMedia: SocialLinksProps;
  };
}

export interface RealtorPageProps {
  realtor: RealtorProps;
  properties: PropertyProps[];
}
