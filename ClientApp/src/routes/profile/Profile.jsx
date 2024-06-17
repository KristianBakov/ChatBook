import React from "react";
import { Container } from "reactstrap";
import ProfileHeader from "../../components/Routes/Profile/ProfileHeader/ProfileHeader";

const user = {
  id: 1,
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
    <Container fluid className="profile-page">
      <ProfileHeader user={user} />

      <Container className="profile-content"></Container>
    </Container>
  );
};

export default Profile;
