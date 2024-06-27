import React from "react";
import ProfileCard from "../ProfileCard";
import { CardTitle } from "reactstrap";
import PhotoGrid from "../../../../PhotoLayouts/PhotoGrid/PhotoGrid";

const photos = [
  { source: "https://loremflickr.com/640/480?lock=11" },
  { source: "https://loremflickr.com/640/480?lock=2" },
  { source: "https://loremflickr.com/640/480?lock=3" },
  { source: "https://loremflickr.com/640/480?lock=4" },
  { source: "https://loremflickr.com/640/480?lock=5" },
  { source: "https://loremflickr.com/640/480?lock=6" },
  { source: "https://loremflickr.com/640/480?lock=7" },
];

const ProfilePhotosCard = ({ user }) => {
  return (
    <ProfileCard className="profile-card">
      <CardTitle className="profile-card-title">Photos</CardTitle>

      {photos && photos.length > 0 && (
        <div className="post-collage-container">
          <PhotoGrid photos={photos} />
        </div>
      )}
    </ProfileCard>
  );
};

export default ProfilePhotosCard;
