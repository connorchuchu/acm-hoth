import { useNavigate } from "react-router-dom";
import { useOpportunities } from "./OpportunityContext";

function ListView() {
  const { opportunities } = useOpportunities();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Nearby Volunteering Opportunities</h2>
      <button onClick={() => navigate("/add")}>+ Add Opportunity</button>
      <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" }}>
        {opportunities.map((opportunity) => (
          <div 
            key={opportunity.id} 
            onClick={() => navigate(`/details/${opportunity.id}`)}
            style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd", cursor: "pointer" }}
          >
            <h3>{opportunity.title}</h3>
            <p>Location: {opportunity.location}</p>
            <p>Date: {opportunity.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
