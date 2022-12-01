import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ResidentialPropertyProps } from './residentialProperty.types';

/**
 * Enum containing the available property types.
 */
export const PropertyTypes = Object.freeze({
  RESIDENTIAL: 'residentialProperty',
  COMMERCIAL: 'commercialProperty',
  LAND: 'landProperty',
});

/**
 * Base property props.
 */
export interface PropertyProps {
  _id: string;
  _type: string;
  listing: ListingProps;
  includedUtilities: string[];
  buildDate: string;
  cardPreview: PropertyCardPreviewProps;
  features: ResidentialPropertyProps;
  community: CommunityProps;
}

/**
 * Card preview props for property objects.
 */
export interface PropertyCardPreviewProps {
  title: string;
  summary: string;
}

/**
 * Base listing props for all property types.
 */
export interface ListingProps {
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

/**
 * Community props.
 */
interface CommunityProps {
  nearbySchools: {
    elementary: string;
    middle: string;
    high: string;
  };
}

/**
 * Address props.
 */
export interface AddressProps {
  street: string;
  city: string;
  state: string;
  zip: string;
}
