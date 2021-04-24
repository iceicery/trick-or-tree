import './ChampionMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ChampionCard from '../ChampionCard/ChampionCard';
import { Link } from 'react-router-dom';
import home from '../../images/home.svg';
import { champTrees } from '../../data/ChampTree';

export default function ChampionMap() {
  console.log(champTrees.features[0].properties);
  return (
    <section className="championmap">
      <Link to="/" className="championmap__button">
        <img src={home} alt="go home" className="championmap__button-img" />
      </Link>
      <MapContainer
        center={[32.5, -86.7]}
        zoom={6.5}
        scrollWheelZoom={false}
        className="championmap__map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {champTrees.features.map((tree, i) => (
          <Marker
            position={[tree.properties.Latitude, tree.properties.Longitude]}
            key={i}
          >
            <Popup>
              <ChampionCard
                img_url={tree.properties.image_path}
                name={tree.properties.species_x}
                subspecies={tree.properties.subspecies}
                spread={tree.properties.spread_ft}
                description={tree.properties.wiki_summary}
                location={tree.properties.county}
                circumference={tree.properties.circumference_in}
                height={tree.properties.height_in}
                total_points={tree.properties.total_points}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
