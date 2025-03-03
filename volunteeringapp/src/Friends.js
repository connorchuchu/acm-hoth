import React from "react";
import "./Profile.css"; // Assuming styles are in Profile.css
import alicePFP from "./assets/alicePFP.jpg"
import alicePost from "./assets/alicePost.jpg"
import mikePFP from "./assets/mikePFP.jpg"
import mikePost from "./assets/mikePost.jpg"
import samanthaPFP from "./assets/samanthaPFP.jpg"
import samanthaPost from "./assets/samanthaPost.jpeg"



function FriendsPosts() {
  const posts = [
    {
      id: 1,
      name: "Alice Johnson",
      username: "@alicej",
      image: alicePFP,
      content: "Had an amazing time volunteering at the food bank today! 🍽️❤️",
      postImage: alicePost
    },
    {
      id: 2,
      name: "Michael Smith",
      username: "@mikes",
      image: mikePFP,
      content: "Beach cleanup was a success! Thanks to everyone who joined. 🌊♻️",
      postImage: mikePost
    },
    {
      id: 3,
      name: "Samantha Lee",
      username: "@samlee",
      image: samanthaPFP,
      content: "The community garden is blooming beautifully this spring! 🌱🌻",
      postImage: samanthaPost
    }
  ];

  return (
    <div style={{ maxWidth: "500px", margin: "auto", height: "100vh", display: "flex", flexDirection: "column" }}>
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
        Friends' Posts
      </div>

      {/* Scrollable Posts List */}
      <div style={{ flex: 1, marginTop: "70px", overflowY: "scroll", padding: "20px", height: "calc(100vh - 70px)" }}>
        {posts.map((post) => (
          <div key={post.id} className="post-card" style={{ marginBottom: "20px", padding: "15px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={post.image} alt={post.name} className="post-profile-image" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
              <div className="post-info">
                <p className="post-name" style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>{post.name}</p>
                <p className="post-username" style={{ margin: "0", fontSize: "14px", color: "gray" }}>{post.username}</p>
              </div>
            </div>
            <p className="post-content" style={{ marginTop: "10px", fontSize: "14px" }}>{post.content}</p>
            {post.postImage && <img src={post.postImage} alt="Post" className="post-image" style={{ width: "100%", height:"100%", borderRadius: "10px", marginTop: "10px" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsPosts;
