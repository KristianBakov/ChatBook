import React from "react";
import { Container } from "reactstrap";
import ProfileHeader from "../../components/Routes/Profile/ProfileHeader/ProfileHeader";
import ProfileContent from "../../components/Routes/Profile/ProfileContent/ProfileContent";
import "./Profile.css";

const user = {
  id: 1,
  profileInfo: {
    bio: "This is a test bio",
    education: "This is a test education",
    homeTown: null,
    featuredPhotos: [
      {
        id: 1,
        photo: "https://loremflickr.com/42/42?lock=25",
      },
      {
        id: 2,
        photo: "https://loremflickr.com/42/42?lock=26",
      },
      {
        id: 3,
        photo: "https://loremflickr.com/42/42?lock=27",
      },
    ],
  },
  username: "Testonito",
  profilePicture: "https://loremflickr.com/42/42?lock=21",
  friends: [
    {
      id: 2,
      profilePicture: "https://loremflickr.com/42/42?lock=20",
    },
    {
      id: 3,
      profilePicture: "https://loremflickr.com/42/42?lock=24",
    },
    {
      id: 4,
      profilePicture: "https://loremflickr.com/42/42?lock=22",
    },
  ],
};

const Profile = () => {
  return (
    <Container fluid className="profile-page container-clean">
      <ProfileHeader user={user} />

      <ProfileContent user={user} />
    </Container>
  );
};

export default Profile;
