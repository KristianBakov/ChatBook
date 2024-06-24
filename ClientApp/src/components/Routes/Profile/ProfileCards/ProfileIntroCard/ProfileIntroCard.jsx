import React from "react";
import "./ProfileIntroCard.css";
import ProfileCard from "../ProfileCard";
import ProfileCardInfoSection from "../ProfileCardInfoSection";

const ProfileIntroCard = ({ user }) => {
  return (
    <ProfileCard className="profile-card">
      <ProfileCardInfoSection
        sectionName="Bio"
        userProp={user.profileInfo.bio}
      />
      <ProfileCardInfoSection
        sectionName="Education"
        userProp={user.profileInfo.education}
      />
      <ProfileCardInfoSection
        sectionName="Home Town"
        userProp={user.profileInfo.homeTown}
      />
      <ProfileCardInfoSection
        sectionName="Featured Photos"
        userProp={user.profileInfo.education}
      />
    </ProfileCard>
  );
};

export default ProfileIntroCard;
