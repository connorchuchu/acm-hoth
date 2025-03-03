import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateOpportunity({ addOpportunity }) {
  const navigate = useNavigate();

  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    location: "",
    date: "",
    lat: "",
    lng: "",
    description: "",
    image: ""
  });

  if (!addOpportunity) {
    console.error("Error: addOpportunity function is missing.");
    return <h2>Error: Something went wrong. Please try again.</h2>;
  }

  const handleChange = (e) => {
    setNewOpportunity({ ...newOpportunity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newOpportunity.title || !newOpportunity.location || !newOpportunity.date || !newOpportunity.lat || !newOpportunity.lng) {
      alert("Please fill in all required fields!");
      return;
    }

    addOpportunity(newOpportunity);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#2E7D32" }}>Create New Opportunity</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          value={newOpportunity.title} 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          value={newOpportunity.location} 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <input 
          type="date" 
          name="date" 
          value={newOpportunity.date} 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <input 
          type="text" 
          name="lat" 
          placeholder="Latitude" 
          value={newOpportunity.lat} 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <input 
          type="text" 
          name="lng" 
          placeholder="Longitude" 
          value={newOpportunity.lng} 
          onChange={handleChange} 
          required 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <textarea 
          type="text"
          name="description" 
          placeholder="Description (optional)" 
          value={newOpportunity.description} 
          onChange={handleChange} 
          required
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px", minHeight: "100px" }}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL (optional)" 
          value={newOpportunity.image} 
          onChange={handleChange} 
          style={{ padding: "12px", background: "#f8f8f8", border: "none", borderRadius: "8px", fontSize: "16px" }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: "12px", 
            backgroundColor: "#4CAF50", 
            color: "white", 
            border: "none", 
            cursor: "pointer", 
            borderRadius: "8px", 
            fontSize: "16px", 
            fontWeight: "bold",
            transition: "background 0.3s" 
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#388E3C"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          Add Opportunity
        </button>
      </form>
    </div>
  );
}

export default CreateOpportunity;
