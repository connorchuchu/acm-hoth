import { createContext, useState, useContext } from "react";

const OpportunitiesContext = createContext();

export function OpportunitiesProvider({ children }) {
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      title: "Beach Cleanup",
      location: "Santa Monica",
      date: "March 10, 2025",
      lat: 34.0195,
      lng: -118.4912,
      description: "Join us to clean up the beach and make it plastic-free!",
      image: "logo.svg",
    },
    {
      id: 2,
      title: "Food Bank Volunteering",
      location: "Downtown LA",
      date: "March 15, 2025",
      lat: 34.0522,
      lng: -118.2437,
      description: "Help distribute food to those in need at the community center.",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const addOpportunity = (newOpportunity) => {
    setOpportunities((prev) => [...prev, { id: prev.length + 1, ...newOpportunity }]);
  };

  return (
    <OpportunitiesContext.Provider value={{ opportunities, addOpportunity }}>
      {children}
    </OpportunitiesContext.Provider>
  );
}

export function useOpportunities() {
  return useContext(OpportunitiesContext);
}
