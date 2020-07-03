import React from 'react';
import Card from '../Card';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker/react';
import IconInfo from '../IconInfo';

function MapLocation(props) {
  const { data } = props;

  const center = [data.latitude, data.longitude];
  const zoom = 15;

  function provider(x, y, z, dpr) {
    const s = String.fromCharCode(97 + ((x + y + z) % 3));
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }

  return (
    <Card title="Local">
      <Map center={center} zoom={zoom} provider={provider}>
        <Marker anchor={center} payload={1} />
      </Map>
      <IconInfo
        icon="place"
        value={data.place}
        description={data.description}
      />
    </Card>
  );
}

export default MapLocation;
