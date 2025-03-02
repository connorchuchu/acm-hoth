import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpportunitiesProvider } from "./OpportunityContext";
import MapView from "./MapView";
import ListView from "./ListView";
import OpportunityDetails from "./OpportunityDetails";
import AddOpportunity from "./AddOpportunity";

function App() {
<<<<<<< HEAD
  return (
    <OpportunitiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<OpportunityDetails />} />
          <Route path="/add" element={<AddOpportunity />} />
        </Routes>
      </Router>
    </OpportunitiesProvider>
=======
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
>>>>>>> parent of dcf8d0f (map and list stuff)
  );
}

export default App;
