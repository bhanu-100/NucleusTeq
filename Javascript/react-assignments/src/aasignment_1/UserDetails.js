// UserDetails.js
import React from "react";

function UserDetails({ email, location }) {
  return (
    <div>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default UserDetails;
