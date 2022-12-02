import groq from 'groq';

/**
 * Get all realtor slugs for generating static paths.
 */
export const realtorSlugsQuery = groq`
  *[_type == "realtor"] {slug}
`;

/**
 * Get a single realtor by slug.
 */
export const realtorBySlugQuery = groq`
  *[_type == "realtor" && slug.current == $realtorSlug]
`;

/**
 * Get all realtors.
 * TODO: Implement pagination.
 */
export const getRealtorsQuery = groq`
  *[_type == "realtor"] {
  ...
}`;
