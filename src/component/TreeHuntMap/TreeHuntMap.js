import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './TreeHuntMap.css';
import { treepins } from '../../data/TreeHuntMap';

export default function TreeHuntMap() {
  return (
    <MapContainer
      center={[34.70770745466896, -86.63427752193223]}
      zoom={30}
      scrollWheelZoom={false}
      className="treehunt__map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {treepins.map((pin, i) => (
        <Marker key={i} position={pin.coor}>
          <Popup>
            <p>{pin.name}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
