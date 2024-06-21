import React from "react";
import { Container } from "reactstrap";
import ProfileHeader from "../../components/Routes/Profile/ProfileHeader/ProfileHeader";
import ProfileContent from "../../components/Routes/Profile/ProfileContent/ProfileContent";
import "./Profile.css";

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
    <Container fluid className="profile-page container-clean">
      <ProfileHeader user={user} />

      <ProfileContent />
    </Container>
  );
};

export default Profile;
