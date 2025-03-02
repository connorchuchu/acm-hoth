import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MapView from "./MapView";
import ListView from "./ListView";
import Profile from "./Profile";

const userData = {
  name: "John Doe",
  username: "johndoe123",
  avatar: "https://i.pravatar.cc/100?img=3", // Placeholder profile image
  posts: [
    "Had a great day at the park! 🌳",
    "Just finished an amazing book 📖",
    "Excited for the weekend! 🎉",
  ],
};

function Home({ view, setView, opportunities, setOpportunities }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 p-6 w-full">
      {/* Profile Picture (Top-Right) */}
      <div className="w-full flex justify-end pr-6 mb-4">
        <Link to="/profile">
          <img
            src={userData.avatar}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-md hover:opacity-80 transition"
          />
        </Link>
      </div>

      {/* Switch View Button (Centered) */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setView(view === "list" ? "map" : "list")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          {view === "list" ? "Switch to Map View" : "Switch to List View"}
        </button>
      </div>

      {/* View Section */}
      <div className="mt-4 w-full max-w-4xl mx-auto">
        {view === "list" ? (
          <ListView opportunities={opportunities} setOpportunities={setOpportunities} />
        ) : (
          <MapView opportunities={opportunities} />
        )}
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = useState("list");

  // Shared state for opportunities
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Food Bank Help", lat: 34.0522, lng: -118.2437 },
    { id: 2, title: "Beach Cleanup", lat: 33.9416, lng: -118.4085 },
    { id: 3, title: "Community Garden", lat: 34.0194, lng: -118.4912 },
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              view={view}
              setView={setView}
              opportunities={opportunities}
              setOpportunities={setOpportunities}
            />
          }
        />
        <Route path="/profile" element={<Profile user={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
