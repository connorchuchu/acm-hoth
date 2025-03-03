import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import MapView from "./MapView";
import ListView from "./ListView";
import OpportunityDetail from "./OpportunityDetail";
import CreateOpportunity from "./CreateOpportunity";
import Profile from "./Profile";
import Friends from "./Friends";
import "./ListView.css";
import foodbank from "./assets/foodbank.png";
import beach from "./assets/beachcleanup.jpg";
import garden from "./assets/garden.jpg"

// If using a locally stored image inside src/assets/
const navButtonStyle = {
  backgroundColor: "#4CAF50", // Green theme, adjust as needed
  color: "white",
  border: "none",
  padding: "12px 18px",
  fontSize: "16px",
  borderRadius: "25px",
  cursor: "pointer",
  transition: "background 0.3s ease, transform 0.2s ease",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
};

const hoverStyle = {
  backgroundColor: "#45a049", // Slightly darker on hover
  transform: "scale(1.05)",
};

// Apply hover effect using an inline function
const applyHover = (e, isHover) => {
  Object.assign(e.target.style, isHover ? hoverStyle : navButtonStyle);
};


function App() {
  const [view, setView] = useState("list");
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Food Bank Help Needed", image: foodbank, location: "Downtown LA", date: "2025-03-05", lat: 34.0522, lng: -118.2437, description: "Help distribute food to those in need.", points: "34", },
    { id: 2, title: "Beach Cleanup", image: beach, location: "Santa Monica Beach", date: "2025-03-12", lat: 34.0194, lng: -118.4912, description: "Join us in cleaning up Santa Monica Beach!", points: "25"},
    { id: 3, title: "Community Garden", image: garden, location: "Culver City", date: "2025-03-17", lat: 34.0219, lng: -118.3965, description: "Help maintain a community garden.", points:"12"}
  ]);

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
    if (["/create", "/friends", "/profile"].includes(location.pathname)) {
      navigate("/"); // Go home when on these pages
    } else {
      setView(view === "list" ? "map" : "list"); // Toggle between list/map
    }
  };


  return (
    <div style={{ padding: "20px", paddingBottom: "80px" }}>

      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",  // Add this line
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",  // Ensures buttons are centered
        padding: "10px 15px",
        backgroundColor: "#ffffff",
        borderTop: "2px solid #ddd",
        zIndex: 1000,
        boxShadow: "0px -2px 10px rgba(0,0,0,0.1)"
      }}>
        <button
          style={navButtonStyle}
          onMouseEnter={(e) => applyHover(e, true)}
          onMouseLeave={(e) => applyHover(e, false)}
          onClick={handleToggleView}
        >
          {["/create", "/friends", "/profile"].includes(location.pathname) ? "Home" : (view === "list" ? "Map View" : "List View")}
        </button>

        <Link to="/create">
          <button
            style={navButtonStyle}
            onMouseEnter={(e) => applyHover(e, true)}
            onMouseLeave={(e) => applyHover(e, false)}
          >
            ✨ Create
          </button>
        </Link>

        <Link to="/friends">
          <button
            style={navButtonStyle}
            onMouseEnter={(e) => applyHover(e, true)}
            onMouseLeave={(e) => applyHover(e, false)}
          >
            👥 Friends
          </button>
        </Link>

        <Link to="/profile">
          <button
            style={navButtonStyle}
            onMouseEnter={(e) => applyHover(e, true)}
            onMouseLeave={(e) => applyHover(e, false)}
          >
            🏠 Profile
          </button>
        </Link>

      </nav>



      <Routes>
        <Route path="/" element={view === "list" ? <ListView opportunities={opportunities} /> : <MapView opportunities={opportunities} />} />
        <Route path="/opportunity/:id" element={<OpportunityDetail opportunities={opportunities} />} />
        <Route path="/create" element={<CreateOpportunity addOpportunity={addOpportunity} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
