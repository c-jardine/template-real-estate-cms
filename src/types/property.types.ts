import { PortableTextBlockComponent } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ResidentialPropertyProps } from './residentialProperty.types';
import React from 'react';

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
  /** The {@link PropertyTypes | type of property}. */
  _type: string;
  /** The {@link ListingProps | details of the listing}. */
  listing: ListingProps;
  includedUtilities: string[];
  buildDate: string;
  /** The fields contained on {@link PropertyCardPreviewProps | card previews}. */
  cardPreview: PropertyCardPreviewProps;
  /** The property's {@link FeaturesProps | features} based on the
   * {@link PropertyTypes | property type}. */
  features: FeaturesProps;
  /** The {@link CommunityProps | community} features relevant to the property. */
  community: CommunityProps;
}

/**
 * Card preview props for property objects.
 */
export interface PropertyCardPreviewProps {
  /** The card preview's heading. */
  title: string;
  /** A short blurb about the property. */
  summary: string;
}

/**
 * Base listing props for all property types.
 */
export interface ListingProps {
  /** The {@link AddressProps | address} of the property. */
  address: AddressProps;
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
 * Feature props.
 * TODO: Add unions to other property type props.
 */
type FeaturesProps = ResidentialPropertyProps;

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
