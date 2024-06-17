import React from "react";
import { Button, Row } from "reactstrap";
import "./ProfileUserFriendIconRow.css";
import { Link } from "react-router-dom";

const ProfileUserFriendIconRow = ({ friendsList }) => {
  return (
    <Row className="profile-user-friend-icon-row">
      {friendsList.length > 0 ? (
        friendsList.map((friend) => (
          <Button
            tag={Link}
            to={`/profile/${friend.id}`}
            key={friend.id}
            className="profile-user-friend-icon-row-icon"
          >
            <img src={friend.profilePicture} alt="profile" />
          </Button>
        ))
      ) : (
        <p>Add more friend to see them appear here!</p>
      )}
    </Row>
  );
};

export default ProfileUserFriendIconRow;
