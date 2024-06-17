import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ButtonTabGroup from "../../../ButtonGroups/ButtonTabGroup/ButtonTabGroup";
import ProfileUserFriendIconRow from "./ProfileUserFriendIconRow/ProfileUserFriendIconRow";

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

const ProfileHeader = (/* pass user here */) => {
  return (
    <Container className="profile-header">
      <Row className="profile-upper-header-details">
        <Row className="profile-upper-left-header-details">
          <div className="profile-header-image">
            <img
              src="https://loremflickr.com/1920/1080?lock=14"
              alt="profile"
            />
          </div>

          <Container className="profile-header-details">
            <Col className="profile-header-name-friends">
              <h3>Username</h3>
              <p>Friends: 0</p>
              <ProfileUserFriendIconRow friendsList={user.friends} />
            </Col>
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
    </Container>
  );
};

export default ProfileHeader;
