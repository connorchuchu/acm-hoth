
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
<<<<<<< HEAD
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { useOpportunities } from "./OpportunityContext";

function MapView() {
  const { opportunities } = useOpportunities();
  const navigate = useNavigate();
=======
>>>>>>> parent of dcf8d0f (map and list stuff)

  return (
    <MapContainer center={[34.0522, -118.2437]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

<<<<<<< HEAD
      {opportunities.map((opportunity) => {
        const customIcon = L.divIcon({
          className: "custom-marker",
          html: `<div style="
            background-color: white;
            padding: 8px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
            cursor: pointer;
          ">${opportunity.title}</div>`,
          iconSize: [100, 40]
        });

        return (
          <Marker key={opportunity.id} position={[opportunity.lat, opportunity.lng]} icon={customIcon}>
            <Popup>
              <strong>{opportunity.title}</strong>
              <br />
              {opportunity.location} - {opportunity.date}
              <br />
              <button onClick={() => navigate(`/details/${opportunity.id}`)}>View Details</button>
            </Popup>
          </Marker>
        );
      })}
=======
      {opportunities.map((opportunity) => (
        <Marker key={opportunity.id} position={[opportunity.lat, opportunity.lng]}>
          <Popup>{opportunity.title}</Popup>
        </Marker>
      ))}
>>>>>>> parent of dcf8d0f (map and list stuff)
    </MapContainer>
  );
}

export default MapView;
    