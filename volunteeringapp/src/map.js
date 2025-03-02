import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1); // Force map re-render when component mounts
  }, []);

  return (
    <MapContainer
      key={key} // Forces re-render
      center={[34.0522, -118.2437]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
    </MapContainer>
  );
}

export default MapView;
