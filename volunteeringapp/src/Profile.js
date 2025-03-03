import React from "react";
import "./Profile.css";
import communityHelper from "./assets/communityhelper.png"
import volunteer from "./assets/volunteer.png"
import ecoWarrior from "./assets/ecowarrior.png"

function Profile() {
  const friendsCount = 3; // Replace this with dynamic data if needed

  return (
    
    <div className="profile-container">
      <div className="profile-banner">
      <br />
      <br />
      <br />
        <h1 className="profile-name">Brandon Lim</h1>
        <h2 className="profile-username">@brandonnnlimmm</h2>
        <p className="friends-count" style={{ fontSize: "16px", color: "#555", marginTop: "5px" }}>
          {friendsCount} {friendsCount === 1 ? "Friend" : "Friends"}
        </p>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p>This is where you can add some personal information about yourself.</p>
        
        <h3>Badges</h3>
        <div className="badges-container" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div className="badge">
            <img src={communityHelper} alt="Community Helper Badge" />
            <p>Community Helper</p>
            <p id="tiny"><i>Gain 100 points in community service</i></p>
          </div>
          <div className="badge">
            <img src={volunteer} alt="Volunteer Star Badge" />
            <p>Volunteer Star</p>
            <p id="tiny">Complete 10 Volunteering Missions</p>
          </div>
          <div className="badge">
            <img src={ecoWarrior} alt="Eco Warrior Badge" />
            <p>Eco Warrior</p>
            <p id="tiny">Complete 5 Climate Related Volunteering Challenges</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
