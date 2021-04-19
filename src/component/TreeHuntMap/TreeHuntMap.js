import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './TreeHuntMap.css';
import { treepins } from '../../data/TreeHuntMap';
import close from '../../images/times-solid.svg';
import { Link } from 'react-router-dom';

export default function TreeHuntMap({ isMapOpen, toggleMap }) {
  return (
    <section className="treehuntmap">
      <Link
        to="/code-enter"
        className="treehuntmap__button-close"
        onClick={toggleMap}
      >
        <img src={close} alt="close" className="tips__button-img" />
      </Link>
      <MapContainer
        center={[34.707261, -86.634346]}
        zoom={20}
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
