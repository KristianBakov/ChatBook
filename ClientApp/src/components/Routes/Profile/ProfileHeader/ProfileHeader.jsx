import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ButtonTabGroup from "../../../ButtonGroups/ButtonTabGroup/ButtonTabGroup";
import ProfileUserFriendIconRow from "./ProfileUserFriendIconRow/ProfileUserFriendIconRow";
import "./ProfileHeader.css";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <Row className="profile-upper-header-details container-clean">
        <Row className="profile-upper-left-header-details container-clean">
          <div className="profile-header-image">
            <img
              src="https://loremflickr.com/1920/1080?lock=14"
              alt="profile"
            />
          </div>

          <Container className="profile-header-details">
            <Row className="profile-header-row">
              <img src={user.profilePicture} alt="profile" />
              <Col className="profile-header-name-friends">
                <h3>{user.username}</h3>
                <p>{user.friends.length} Friends</p>
                <ProfileUserFriendIconRow friendsList={user.friends} />
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="profile-upper-right-header-details">
          <Button className="profile-edit-button">Edit Profile</Button>
        </Row>
      </Row>

      <Row className="profile-lower-header-details">
        {
          <ButtonTabGroup>
            <Button>Posts</Button>
            <Button>About</Button>
            <Button>Friends</Button>
            <Button>Photos</Button>
          </ButtonTabGroup>
        }
      </Row>
    </div>
  );
};

export default ProfileHeader;
