import { useParams, useNavigate } from "react-router-dom";
import { useOpportunities } from "./OpportunityContext";

function OpportunityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { opportunities } = useOpportunities();
  const opportunity = opportunities.find((opp) => opp.id === parseInt(id));

  if (!opportunity) {
    return <h2>Opportunity not found!</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{opportunity.title}</h2>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Date:</strong> {opportunity.date}</p>
      <p>{opportunity.description}</p>
      <img src={opportunity.image} alt="Opportunity" style={{ width: "100%", borderRadius: "8px" }} />
    </div>
  );
}

export default OpportunityDetails;
