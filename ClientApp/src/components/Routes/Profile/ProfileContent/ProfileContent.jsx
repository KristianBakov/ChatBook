import React from "react";
import "./ProfileContent.css";
import { Col, Container } from "reactstrap";
import ProfileIntroCard from "../ProfileCards/ProfileIntroCard/ProfileIntroCard";
import ProfilePhotosCard from "../ProfileCards/ProfilePhotosCard/ProfilePhotosCard";
import ProfileFriendsCard from "../ProfileCards/ProfileFriendsCard/ProfileFriendsCard";

const ProfileContent = ({ user }) => {
  return (
    <Container fluid className="profile-content-wrapper">
      <Col className="profile-column profile-content-left">
        <div className="sticky">
          <ProfileIntroCard user={user} />
          <ProfilePhotosCard user={user} />
          <ProfileFriendsCard user={user} />
        </div>
      </Col>
      <Col className="profile-column profile-content-right">
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
        <p>Testing2</p>
      </Col>
    </Container>
  );
};

export default ProfileContent;
