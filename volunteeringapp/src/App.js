import { useState } from "react";
import MapView from "./MapView";
import ListView from "./ListView";

function App() {
  const [view, setView] = useState("list");

  // Shared state for opportunities
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Food Bank Help", lat: 34.0522, lng: -118.2437 },
    { id: 2, title: "Beach Cleanup", lat: 33.9416, lng: -118.4085 },
    { id: 3, title: "Community Garden", lat: 34.0194, lng: -118.4912 }
  ]);

  return (
    <div>
      <button onClick={() => setView(view === "list" ? "map" : "list")}>
        {view === "list" ? "Switch to Map View" : "Switch to List View"}
      </button>

      {view === "list" ? (
        <ListView opportunities={opportunities} setOpportunities={setOpportunities} />
      ) : (
        <MapView opportunities={opportunities} />
      )}
    </div>
  );
}

export default App;
