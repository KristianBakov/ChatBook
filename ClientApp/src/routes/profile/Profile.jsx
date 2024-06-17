import React from "react";
import { Container } from "reactstrap";
import ProfileHeader from "../../components/Routes/Profile/ProfileHeader/ProfileHeader";

const Profile = () => {
  return (
    <Container fluid className="profile-page">
      <ProfileHeader />

      <Container className="profile-content"></Container>
    </Container>
  );
};

export default Profile;
