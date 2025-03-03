import { useParams } from "react-router-dom";

function OpportunityDetail({ opportunities }) {
  const { id } = useParams();
  const opportunity = opportunities.find(op => op.id === parseInt(id));

  if (!opportunity) {
    return <h2>Opportunity Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{opportunity.title}</h1>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Date:</strong> {opportunity.date}</p>
      <p><strong>Description:</strong> {opportunity.description || "No description available."}</p>
      {opportunity.image && <img src={opportunity.image} alt={opportunity.title} style={{ width: "100%", height:"100%", borderRadius: "10px" }} />}
    </div>
  );
}

export default OpportunityDetail;
