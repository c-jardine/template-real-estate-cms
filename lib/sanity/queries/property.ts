import groq from 'groq';

export const propertyIdsQuery = groq`
  *[_type == "residentialProperty"] {_id}
`;

export const propertyByIdQuery = groq`
  *[_type == "residentialProperty" && _id == $id] {
    ...,
    "listing": listing{..., realtor->{slug, name, image}}
  }
`;

export const newPropertiesQuery = groq`
  *[_type == "residentialProperty"] {
    ...,
    "listing": listing{..., realtor->{slug, name, image}}
  }`;

export const filterPropertiesQuery = groq`
  *[_type == $propertyType
    && listing.for == $listingType
    && listing.price.amount >= $minPrice && listing.price.amount <= $maxPrice
    && features.bedrooms >= $bedrooms
    && features.bathrooms.full >= $bathrooms
  ] {..., "listing": listing{..., realtor->{slug, name, image}}}
`;

export const propertiesByRealtorQuery = groq`
  *[_type == "residentialProperty"
    && listing.realtor._ref in *[_type == "realtor" && slug.current == $realtorSlug]._id
  ] {...}
`;
