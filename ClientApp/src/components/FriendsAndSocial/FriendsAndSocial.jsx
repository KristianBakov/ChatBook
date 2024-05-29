import React from "react";
import Sidebar from "../../components/Sidebar";
import FriendsList from "../FriendsList";

const FriendsAndSocial = () => { 
  return (
    <div className="col">
      <Sidebar />
      <FriendsList />
    </div>
  );
};

export default FriendsAndSocial;