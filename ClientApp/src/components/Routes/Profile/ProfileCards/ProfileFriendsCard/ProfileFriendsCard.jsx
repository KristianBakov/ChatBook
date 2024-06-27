import React from "react";
import ProfileCard from "../ProfileCard";
import { CardTitle } from "reactstrap";

const ProfileFriendsCard = ({ user }) => {
  return (
    <ProfileCard className="profile-card">
      <CardTitle className="profile-card-title">Friends</CardTitle>
    </ProfileCard>
  );
};

export default ProfileFriendsCard;
