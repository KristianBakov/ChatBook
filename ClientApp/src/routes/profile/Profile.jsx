import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";
import ButtonTabGroup from "../../components/ButtonGroups/ButtonTabGroup/ButtonTabGroup";

const Profile = () => {
  return (
    <Container fluid className="profile-page">
      <Container className="profile-header">
        <Row className="profile-upper-header-details">
          <Row className="profile-upper-left-header-details">
            <div className="profile-header-image">
              <img src="https://via.placeholder.com/150" alt="profile" />
            </div>

            <Container className="profile-header-details">
              <Col className="profile-header-name-friends">
                <h3>Username</h3>
                <p>Friends: 0</p>
                <Row className="profile-friends-icons">
                  <Col>
                    <img src="https://via.placeholder.com/50" alt="friend" />
                  </Col>
                  <Col>
                    <img src="https://via.placeholder.com/50" alt="friend" />
                  </Col>
                  <Col>
                    <img src="https://via.placeholder.com/50" alt="friend" />
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>

          <Row className="profile-upper-right-header-details">
            <Button className="profile-edit-button">Edit Profile</Button>
          </Row>
        </Row>

        <Row className="profile-lower-header-details">
          {
            /* tabs system */

            <ButtonTabGroup>
              <Button>Posts</Button>
              <Button>About</Button>
              <Button>Friends</Button>
              <Button>Photos</Button>
            </ButtonTabGroup>
          }
        </Row>
      </Container>

      <Container className="profile-content"></Container>
    </Container>
  );
};

export default Profile;
