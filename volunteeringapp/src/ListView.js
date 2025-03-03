import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListView.css";

function ListView({ opportunities }) {
  const [displayedOpportunities, setDisplayedOpportunities] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    loadMoreOpportunities();
  }, []);

  const loadMoreOpportunities = () => {
    const nextItems = opportunities.slice(0, page * itemsPerPage);
    setDisplayedOpportunities(nextItems);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    loadMoreOpportunities();
  }, [page]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Fixed Header */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "15px",
        fontSize: "18px",
        fontWeight: "bold",
        borderBottom: "2px solid #ddd",
        zIndex: 1000,
      }}>
        Nearby Volunteering Opportunities<br />
       <p id="note"> Note: Do this with friends for extra bonuses!</p>
      </div>

      {/* Scrollable List */}
      <div 
        style={{ flex: 1, marginTop: "60px", overflowY: "scroll", padding: "10px", height: "calc(100vh - 60px)" }}
        onScroll={handleScroll}
      >
        {displayedOpportunities.map((opportunity) => (
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
              <img 
                src={opportunity.image} 
                alt={opportunity.title} 
                style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "10px" }}
                onError={(e) => e.target.style.display = "none"} // Hides broken images
              />
              <p style={{ margin: "0", fontSize: "14px" }}><strong>Location:</strong> {opportunity.location}</p>
              <p style={{ margin: "0", fontSize: "14px" }}><strong>Date:</strong> {opportunity.date}</p>
              <p style={{ margin: "0", fontSize: "14px" }}><strong>Points:</strong> {opportunity.points}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListView;
