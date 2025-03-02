import { useState } from "react";
import MapView from "./map"; // Ensure this file exists
import "./App.css";

// Dummy data for opportunities
const opportunities = [
  { id: 1, title: "Park Cleanup", location: "Central Park", date: "March 10" },
  { id: 2, title: "Food Drive", location: "Local Shelter", date: "March 12" },
  { id: 3, title: "Beach Cleanup", location: "Santa Monica", date: "March 15" },
];

function App() {
  const [view, setView] = useState("list");

  return (
    <div>
      <button onClick={() => setView(view === "list" ? "map" : "list")}>
        {view === "list" ? "Switch to Map View" : "Switch to List View"}
      </button>

      {view === "list" ? (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
          <h2>Nearby Volunteering Opportunities</h2>
          <div
            style={{
              height: "300px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                <h3>{opportunity.title}</h3>
                <p>Location: {opportunity.location}</p>
                <p>Date: {opportunity.date}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <MapView />
      )}
    </div>
  );
}

export default App;
