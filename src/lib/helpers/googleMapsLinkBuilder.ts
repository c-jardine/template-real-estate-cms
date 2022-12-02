import { AddressProps } from '../../types';

/**
 * Builds a link to a Google Maps page with the provided address. It works by
 * URL encoding the address and appending it to the base URL for a Google
 * Maps result.
 * @param addressData - The address to encode and be found on Google Maps.
 * @returns The URL to a Google Maps page matching the provided
 * address.
 * @example
 * ```ts
 * const address = {
 *   street: '123 Main St',
 *   city: 'Toledo',
 *   state: 'OH',
 *   zip: '43604'
 * };
 * const url = googleMapsLinkBuilder(address);
 * console.log(url);
 * // 'https://www.google.com/maps/search/?api=1&123+Main+St+Toledo+OH+43604'
 * ```
 */
const googleMapsLinkBuilder = (addressData: AddressProps): string => {
  const address = `${addressData.street} ${addressData.city} ${addressData.state} ${addressData.zip}`;
  const uriEncodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&${uriEncodedAddress}`;
};

export default googleMapsLinkBuilder;
