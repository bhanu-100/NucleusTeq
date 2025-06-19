// UserCard.js
import React from "react";
import UserDetails from "./UserDetails";

function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>{user.name}</h2>
      <UserDetails email={user.email} location={user.location} />
    </div>
  );
}

export default UserCard;
