function Profile() {
    const user = {
      name: "Brandon Sheung-Long Lim",
      email: "brandonlimcollege@gmail.com",
      phone: "(424)-362-6064",
      university: "UCLA",
    };
  
    return (
      <div>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>University:</strong> {user.university}</p>
      </div>
    );
  }
  
  export default Profile;
  