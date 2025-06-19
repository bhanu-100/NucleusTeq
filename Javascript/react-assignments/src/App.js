// App.js
import React from "react";
import UserCard from "./aasignment_1/UserCard";
import Assignment2 from "./assignment_2/assignment";
function App() {
  const user = {
    name: "Bhanu Pratap Singh",
    email: "bhanu@example.com",
    location: "Indore, India"
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserCard user={user} />
      <Assignment2 />
    </div>
  );
}

export default App;
