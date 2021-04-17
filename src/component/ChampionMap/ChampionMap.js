import './ChampionMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ChampionCard from '../ChampionCard/ChampionCard';

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
          <ChampionCard
            img_url="https://images.unsplash.com/photo-1602693154446-9174be270281?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxtYWdub2xpYSUyMGFjdW1pbmF0YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            name="MAGNOLIA"
            family="Magnoliaceae"
            sname="Magnolia"
            kingdom="Plantae"
            Life="80 to 120 years"
            description="Magnolia is a large genus of about 210 flowering plant species in the subfamily Magnolioideae of the family Magnoliaceae. It is named after French botanist Pierre Magnol. Magnolia is an ancient genus. Appearing before bees did, the flowers are theorized to have evolved to encourage pollination by beetles."
            location="Madison"
            circumference="112"
            height="156"
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
