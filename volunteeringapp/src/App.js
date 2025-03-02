import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpportunitiesProvider } from "./OpportunityContext";
import MapView from "./MapView";
import ListView from "./ListView";
import OpportunityDetails from "./OpportunityDetails";
import AddOpportunity from "./AddOpportunity";

function App() {
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
  );
}

export default App;
