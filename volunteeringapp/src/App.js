import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import MapView from "./MapView";
import ListView from "./ListView";
import Profile from "./Profile";
import Friends from "./Friends";

function App() {
  const [view, setView] = useState("list");

  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Food Bank Help Needed", location: "Downtown LA", date: "2025-03-05", lat: 34.0522, lng: -118.2437 },
    { id: 2, title: "Beach Cleanup", location: "Santa Monica Beach", date: "2025-03-12", lat: 34.0194, lng: -118.4912 },
    { id: 3, title: "Community Garden", location: "Culver City", date: "2025-03-17", lat: 34.0219, lng: -118.3965 }
  ]);

  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    location: "",
    date: "",
    lat: "",
    lng: ""
  });

  const handleChange = (e) => {
    setNewOpportunity({ ...newOpportunity, [e.target.name]: e.target.value });
  };

  const handleAddOpportunity = () => {
    if (!newOpportunity.title || !newOpportunity.location || !newOpportunity.date || !newOpportunity.lat || !newOpportunity.lng) {
      alert("Please fill in all fields!");
      return;
    }
    setOpportunities([...opportunities, { ...newOpportunity, id: opportunities.length + 1 }]);
    setNewOpportunity({ title: "", location: "", date: "", lat: "", lng: "" });
  };

  return (
    <Router>
      <div>
        <nav style={{ textAlign: "center", padding: "10px" }}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/profile"><button>View Profile</button></Link>
          <Link to="/friends"><button>Friends</button></Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <>
              <button onClick={() => setView(view === "list" ? "map" : "list")}> 
                {view === "list" ? "Switch to Map View" : "Switch to List View"}
              </button>
              <div style={{ padding: "20px" }}>
                <h3>Add New Opportunity</h3>
                <input type="text" name="title" placeholder="Title" value={newOpportunity.title} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location Name" value={newOpportunity.location} onChange={handleChange} />
                <input type="date" name="date" value={newOpportunity.date} onChange={handleChange} />
                <input type="text" name="lat" placeholder="Latitude" value={newOpportunity.lat} onChange={handleChange} />
                <input type="text" name="lng" placeholder="Longitude" value={newOpportunity.lng} onChange={handleChange} />
                <button onClick={handleAddOpportunity}>Add Opportunity</button>
              </div>
              {view === "list" ? (
                <ListView opportunities={opportunities} />
              ) : (
                <MapView opportunities={opportunities} />
              )}
            </>
          } />
          <Route path="/profile" element={<div style={{ textAlign: "center", padding: "20px" }}><Profile /></div>} />
          <Route path="/friends" element={<div style={{ textAlign: "center", padding: "20px" }}><Friends /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
