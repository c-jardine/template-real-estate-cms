import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '32rem',
};

const center = {
  lat: 41.6532,
  lng: -83.5305,
};

const Location = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Location;
