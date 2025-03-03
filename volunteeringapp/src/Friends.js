import React from "react";
import "./Profile.css"; // Assuming styles are in Profile.css

function Friends() {
  const friends = [
    { id: 1, name: "Alice Johnson", username: "@alicej", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Michael Smith", username: "@mikes", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Samantha Lee", username: "@samlee", image: "https://via.placeholder.com/100" }
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Friends</h2>
      <div className="friends-container">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-card">
            <img src={friend.image} alt={friend.name} />
            <p className="friend-name">{friend.name}</p>
            <p>{friend.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
