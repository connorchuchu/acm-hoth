import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import MapView from "./MapView";
import ListView from "./ListView";
import OpportunityDetail from "./OpportunityDetail";
import CreateOpportunity from "./CreateOpportunity";

function App() {
  const [view, setView] = useState("list");
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Food Bank Help Needed", location: "Downtown LA", date: "2025-03-05", lat: 34.0522, lng: -118.2437, description: "Help distribute food to those in need.", image: "https://via.placeholder.com/400" },
    { id: 2, title: "Beach Cleanup", location: "Santa Monica Beach", date: "2025-03-12", lat: 34.0194, lng: -118.4912, description: "Join us in cleaning up Santa Monica Beach!", image: "https://via.placeholder.com/400" },
    { id: 3, title: "Community Garden", location: "Culver City", date: "2025-03-17", lat: 34.0219, lng: -118.3965, description: "Help maintain a community garden.", image: "https://via.placeholder.com/400" }
  ]);

  // Function to add a new opportunity
  const addOpportunity = (newOpportunity) => {
    setOpportunities([...opportunities, { ...newOpportunity, id: opportunities.length + 1 }]);
  };

  return (
    <Router>
      <AppContent view={view} setView={setView} opportunities={opportunities} addOpportunity={addOpportunity} />
    </Router>
  );
}

function AppContent({ view, setView, opportunities, addOpportunity }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleView = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to home before toggling view
    }
    setView(view === "list" ? "map" : "list");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Button Row for View Toggle & Create */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button 
          onClick={handleToggleView} 
          style={{ padding: "10px", backgroundColor: "#008CBA", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
        >
          {view === "list" ? "Switch to Map View" : "Switch to List View"}
        </button>
        <Link to="/create">
          <button 
            style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
          >
            Create New Opportunity
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={view === "list" ? <ListView opportunities={opportunities} /> : <MapView opportunities={opportunities} />} />
        <Route path="/opportunity/:id" element={<OpportunityDetail opportunities={opportunities} />} />
        <Route path="/create" element={<CreateOpportunity addOpportunity={addOpportunity} />} />
      </Routes>
    </div>
  );
}

export default App;
