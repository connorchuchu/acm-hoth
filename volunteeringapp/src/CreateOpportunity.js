import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateOpportunity({ addOpportunity }) {
  const navigate = useNavigate();

  // ✅ Move useState to the top
  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    location: "",
    date: "",
    lat: "",
    lng: "",
    description: "",
    image: ""
  });

  // ✅ Instead of returning early, handle missing props gracefully
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
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Create New Opportunity</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="title" placeholder="Title" value={newOpportunity.title} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={newOpportunity.location} onChange={handleChange} required />
        <input type="date" name="date" value={newOpportunity.date} onChange={handleChange} required />
        <input type="text" name="lat" placeholder="Latitude" value={newOpportunity.lat} onChange={handleChange} required />
        <input type="text" name="lng" placeholder="Longitude" value={newOpportunity.lng} onChange={handleChange} required />
        <textarea name="description" placeholder="Description (optional)" value={newOpportunity.description} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL (optional)" value={newOpportunity.image} onChange={handleChange} />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
          Add Opportunity
        </button>
      </form>
    </div>
  );
}

export default CreateOpportunity;
