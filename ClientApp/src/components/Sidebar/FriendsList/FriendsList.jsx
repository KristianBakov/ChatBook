import React from "react";
import IconButton from "../../IconButton/IconButton";
import { FaBeer } from "react-icons/fa";

const FriendsList = () => {
  const friends = ["Alice", "Bob", "Charlie", "Dave"];

  return (
    <div className="col friends-list">
      <h5>Friends</h5>
      {friends.map((friend) => (
        <IconButton key={friend} icon={FaBeer}>
          {friend}
        </IconButton>
      ))}
    </div>
  );
};

export default FriendsList;
