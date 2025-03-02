function ListView({ opportunities, setOpportunities }) {
    return (
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Nearby Volunteering Opportunities</h2>
        <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" }}>
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd" }}>
              <h3>{opportunity.title}</h3>
              <p>Latitude: {opportunity.lat}, Longitude: {opportunity.lng}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ListView;
  