import { Link } from "react-router-dom";

function ListView({ opportunities }) {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Nearby Volunteering Opportunities</h2>
      <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" }}>
        {opportunities.map((opportunity) => (
          <Link 
            to={`/opportunity/${opportunity.id}`} 
            key={opportunity.id} 
            style={{ textDecoration: "none", display: "block", marginBottom: "10px" }}
          >
            <div 
              style={{ 
                padding: "15px", 
                border: "1px solid #ddd", 
                borderRadius: "5px", 
                backgroundColor: "#f8f8f8",
                cursor: "pointer",
                transition: "background-color 0.2s",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e0e0e0"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f8f8f8"}
            >
              <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{opportunity.title}</h3>
              <p style={{ margin: "0", fontSize: "14px" }}><strong>Location:</strong> {opportunity.location}</p>
              <p style={{ margin: "0", fontSize: "14px" }}><strong>Date:</strong> {opportunity.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListView;
