import './ChampionMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ChampionMap() {
  return (
    <MapContainer
      center={[32.5, -86.7]}
      zoom={6.5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[32.95947947133575, -86.8595523288862]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
