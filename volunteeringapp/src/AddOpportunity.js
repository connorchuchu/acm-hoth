import { useState } from "react";
import { useOpportunities } from "./OpportunityContext";
import { useNavigate } from "react-router-dom";

function AddOpportunity() {
  const { addOpportunity } = useOpportunities();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", location: "", date: "", lat: "", lng: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addOpportunity(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <button type="submit">Add Opportunity</button>
    </form>
  );
}

export default AddOpportunity;
