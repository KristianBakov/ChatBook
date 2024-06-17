import React from "react";
import { Row } from "reactstrap";
import "./ProfileUserFriendIconRow.css";

const ProfileUserFriendIconRow = ({ friendsList }) => {
  return (
    <Row className="profile-user-friend-icon-row">
      {friendsList.length > 0 ? (
        friendsList.map((friend) => (
          <div key={friend.id} className="profile-user-friend-icon-row-icon">
            <img src={friend.profilePicture} alt="profile" />
          </div>
        ))
      ) : (
        <p>Add more friend to see them appear here!</p>
      )}
    </Row>
  );
};

export default ProfileUserFriendIconRow;
