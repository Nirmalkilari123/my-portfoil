import React from "react";
import { useParams } from "react-router-dom";
import UserData from "./UserData";

function UserDetail() {
  const { userId } = useParams();
  const numericUserId = parseInt(userId, 10); // Convert userId to a number

  // Find the user with the matching ID
  const userDetailData = UserData.find(
    (eachUser) => eachUser.id === numericUserId
  );

  if (!userDetailData) {
    // Handle the case where the user is not found
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>UserDetail</h1>
      <h2>Name:{userDetailData.name}</h2>
      <h3>Email: {userDetailData.email}</h3>
      {/* Display other user details */}
    </div>
  );
}

export default UserDetail;
