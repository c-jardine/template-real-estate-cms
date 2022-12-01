import groq from 'groq';

/**
 * Helper to join realtor data in the listing projection.
 */
const listingWithRealtorProjection = groq`
  "listing": listing{..., realtor->{slug, name, image}}
`;

/**
 * Get all residential property ids for generating static paths.
 */
export const propertyIdsQuery = groq`
  *[_type == "residentialProperty"] {_id}
`;

/**
 * Get a single residential property by id.
 */
export const propertyByIdQuery = groq`
  *[_type == "residentialProperty" && _id == $id] {
    ..., ${listingWithRealtorProjection} }
`;

/**
 * Get all residential properties.
 * TODO: Implement pagination
 */
export const allPropertiesQuery = groq`
  *[_type == "residentialProperty"] {
    ..., ${listingWithRealtorProjection} }`;

/**
 * Get all properties matching the filters.
 * TODO: Implement pagination
 */
export const filterPropertiesQuery = groq`
  *[_type == $propertyType
    && listing.for == $listingType
    && listing.price.amount >= $minPrice && listing.price.amount <= $maxPrice
    && features.bedrooms >= $bedrooms
    && features.bathrooms.full >= $bathrooms
  ] {..., ${listingWithRealtorProjection}}
`;

/**
 * Get all residential properties belonging to specified realtor.
 */
export const propertiesByRealtorQuery = groq`
  *[_type == "residentialProperty"
    && listing.realtor._ref in *[_type == "realtor" && slug.current == $realtorSlug]._id
  ] {..., ${listingWithRealtorProjection}}
`;
