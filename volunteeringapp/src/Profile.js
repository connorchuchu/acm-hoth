import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-banner">
        <h1 className="profile-name">Brandon Sheung-Long Lim</h1>
        <h2 className="profile-username">@yourusername</h2>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p>This is where you can add some personal information about yourself.</p>
        
        <h3>Badges</h3>
        <div className="badges-container" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div className="badge">
            <img src="https://via.placeholder.com/100" alt="Community Helper Badge" />
            <p>Community Helper</p>
          </div>
          <div className="badge">
            <img src="https://via.placeholder.com/100" alt="Volunteer Star Badge" />
            <p>Volunteer Star</p>
          </div>
          <div className="badge">
            <img src="https://via.placeholder.com/100" alt="Eco Warrior Badge" />
            <p>Eco Warrior</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;