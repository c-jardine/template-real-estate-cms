import groq from 'groq';

export const realtorSlugsQuery = groq`
  *[_type == "realtor"] {slug}
`;

export const realtorBySlugQuery = groq`
  *[_type == "realtor" && slug.current == $realtorSlug]
`;

export const getRealtorsQuery = groq`
  *[_type == "realtor"] {
  ...
}`;
