import React from "react";
import "./Profile.css"; // Assuming styles are in Profile.css

function Friends() {
  const friends = [
    { id: 1, name: "Alice Johnson", username: "@alicej", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Michael Smith", username: "@mikes", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Samantha Lee", username: "@samlee", image: "https://via.placeholder.com/100" }
  ];

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
        Friends
      </div>

      {/* Scrollable Friends List */}
      <div style={{ flex: 1, marginTop: "60px", overflowY: "scroll", padding: "10px", height: "calc(100vh - 60px)" }}>
        {friends.map((friend) => (
          <div key={friend.id} className="friend-card" style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f8f8f8",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            transition: "background-color 0.2s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e0e0e0"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f8f8f8"}>
            <img src={friend.image} alt={friend.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
            <div>
              <p className="friend-name" style={{ margin: "0", fontWeight: "bold", fontSize: "16px" }}>{friend.name}</p>
              <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>{friend.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
