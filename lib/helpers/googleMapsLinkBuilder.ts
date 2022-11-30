const googleMapsLinkBuilder = (addressData: {
  street: string;
  city: string;
  state: string;
  zip: string;
}) => {
  const address = `${addressData.street} ${addressData.city} ${addressData.state} ${addressData.zip}`;
  const uriEncodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&${uriEncodedAddress}`;
};

export default googleMapsLinkBuilder;
