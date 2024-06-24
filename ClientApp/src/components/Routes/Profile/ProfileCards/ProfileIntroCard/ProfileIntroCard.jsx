import React from "react";
import ProfileCardInfoSection from "../ProfileCardInfoSection";
import { CardTitle } from "reactstrap";
import ProfileCard from "../ProfileCard";
import PhotoCollage from "../../../../PhotoLayouts/PhotoCollage/PhotoCollage";
import "./ProfileIntroCard.css";

const photos = [
  { source: "https://loremflickr.com/640/480?lock=11" },
  { source: "https://loremflickr.com/640/480?lock=2" },
  { source: "https://loremflickr.com/640/480?lock=3" },
  { source: "https://loremflickr.com/640/480?lock=4" },
  { source: "https://loremflickr.com/640/480?lock=5" },
  { source: "https://loremflickr.com/640/480?lock=6" },
  { source: "https://loremflickr.com/640/480?lock=7" },
];

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

      <ProfileCard className="profile-card">
        <CardTitle className="profile-card-title">Photos</CardTitle>

        {photos && photos.length > 0 && (
          <div className="post-collage-container">
            <PhotoCollage postOwner="test" photos={photos} />
          </div>
        )}
      </ProfileCard>
    </div>
  );
};

export default ProfileIntroCard;
