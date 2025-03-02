
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ opportunities }) {
  return (
    <MapContainer center={[34.0522, -118.2437]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {opportunities.map((opportunity) => (
        <Marker key={opportunity.id} position={[opportunity.lat, opportunity.lng]}>
          <Popup>{opportunity.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
    