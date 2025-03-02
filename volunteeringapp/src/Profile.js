import React from "react";


const Profile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <h3 className="mt-4 text-lg font-semibold text-gray-700">Recent Posts</h3>
      <ul className="mt-2 space-y-2">
        {user.posts.length > 0 ? (
          user.posts.map((post, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded-lg shadow-sm">
              {post}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No recent posts available.</p>
        )}
      </ul>
    </div>
  );
};

export default Profile;
