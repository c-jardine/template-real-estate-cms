import { AddressProps } from '../../src/types';

/**
 * Builds a link to a Google Maps page with the provided address. It works by
 * URL encoding the address and appending it to the base URL for a Google
 * Maps result.
 * @param addressData The address to encode and be found on Google Maps.
 * @returns {string} The URL to a Google Maps page matching the provided
 * address.
 */
const googleMapsLinkBuilder = (addressData: AddressProps): string => {
  const address = `${addressData.street} ${addressData.city} ${addressData.state} ${addressData.zip}`;
  const uriEncodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&${uriEncodedAddress}`;
};

export default googleMapsLinkBuilder;
