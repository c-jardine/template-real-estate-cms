import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ResidentialPropertyProps } from './residentialProperty.types';

export const Property = {
  RESIDENTIAL: 'residentialProperty',
  COMMERCIAL: 'commercial',
  LAND: 'land',
};

export interface PropertyProps {
  _id: string;
  _type: string;
  listing: ListingProps;
  includedUtilities: string[];
  buildDate: string;
  cardPreview: PropertyCardProps;
  features: ResidentialPropertyProps;
  community: CommunityProps;
}

interface PropertyCardProps {
  title: string;
  summary: string;
}

interface ListingProps {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  for: 'sale' | 'rental' | 'lease';
  gallery: SanityImageSource[];
  price: {
    amount: number;
    frequency: '' | 'per week' | 'per month' | 'per year';
  };
  size: {
    size: number;
    unit: 'sq. ft.' | 'sq. m.' | 'acres' | 'hectares';
  };
  description: any;
  realtor: {
    name: string;
    slug: { current: string };
  };
}

interface CommunityProps {
  nearbySchools: {
    elementary: string;
    middle: string;
    high: string;
  };
}
