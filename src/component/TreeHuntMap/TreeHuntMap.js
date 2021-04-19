import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './TreeHuntMap.css';
import { treepins } from '../../data/TreeHuntMap';
import close from '../../images/times-solid.svg';

export default function TreeHuntMap({ isMapOpen, toggleMap }) {
  return (
    <section className={isMapOpen ? 'treehuntmap' : 'hidden'}>
      <button className="tips__button-close" onClick={toggleMap}>
        <img src={close} alt="close" className="tips__button-img" />
      </button>
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
    </section>
  );
}
