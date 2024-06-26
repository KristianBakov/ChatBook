import React from "react";
import ProfileCardInfoSection from "../ProfileCardInfoSection";
import ProfileCard from "../ProfileCard";
import "./ProfileIntroCard.css";

const ProfileIntroCard = ({ user }) => {
  return (
    <div className="profile-card-wrapper">
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
        {/* TODO: Implement featured photos */}
        {/* <ProfileCardInfoSection
        sectionName="Featured Photos"
        userProp={user.profileInfo.featuredPhotos}
      /> */}
      </ProfileCard>
    </div>
  );
};

export default ProfileIntroCard;
