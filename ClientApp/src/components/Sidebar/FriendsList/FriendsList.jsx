import React from "react";
import IconButton from "../../IconButton/IconButton";

const FriendsList = () => {
  const friends = ["Alice", "Bob", "Charlie", "Dave"];

  return (
    <div className="col friends-list">
      <h5>Friends</h5>
      {friends.map((friend) => (
        <IconButton key={friend}>{friend}</IconButton>
      ))}
    </div>
  );
};

export default FriendsList;
