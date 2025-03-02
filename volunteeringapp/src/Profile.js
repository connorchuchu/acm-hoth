import React from "react";
import "./Profile.css";
import communityHelper from "./assets/communityhelper.png"
import volunteer from "./assets/volunteer.png"
import ecoWarrior from "./assets/ecowarrior.png"

function Profile() {
  const friendsCount = 27; // Replace this with dynamic data if needed
  const pointsCount = 2383;
  return (
    <div className="profile-container">
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        borderBottom: "2px solid #ddd",
        zIndex: 1000,
      }}>
        Profile
      </div>

      <div className="profile-banner">
      <br />
      <br />
      <br />
      <h1 className="profile-name" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
  Brandon Lim
</h1>
<h2 className="profile-username" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
  @brandonnnlimmm
</h2>
<p className="points-count" style={{ 
  fontSize: "25px", 
  color: "#ffffff", 
  marginTop: "5px", 
  textShadow: "2px 2px 3px rgba(0, 0, 0, 0.7)"
}}>
  {pointsCount} {pointsCount === 1 ? "Point" : "Points"}
</p>
<p className="friends-count" style={{ 
  fontSize: "16px", 
  color: "#ffffff", 
  marginTop: "5px", 
  textShadow: "2px 2px 3px rgba(0, 0, 0, 0.7)"
}}>
  {friendsCount} {friendsCount === 1 ? "Friend" : "Friends"}
</p>

          
        
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p>Hi everyone i’m brandon lim and i’m from LA. i’m 100% committed to ucla and i’ll be majoring in math of comp

i love spending time w my friends, playing soccer, doing puzzles (i.e. nyt games or just general brain teasers), watching sports, and am open to trying new things
i listen to sza, w2e, stayc, uzi, future, etc. i’m pretty easygoing and can entertain any convo and would love to meet new people and get to know u guys
</p>
        <br/>
        <br/>
        <h3>Badges</h3>
        <div className="badges-container" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div className="badge">
            <img src={communityHelper} alt="Community Helper Badge" />
            <p>Community Helper</p>
            <p id="tiny">Gain 100 points in community service</p>
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
