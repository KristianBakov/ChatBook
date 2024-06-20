import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ButtonTabGroup from "../../../ButtonGroups/ButtonTabGroup/ButtonTabGroup";
import ProfileUserFriendIconRow from "./ProfileUserFriendIconRow/ProfileUserFriendIconRow";
import IconTextButton from "../../../Buttons/TextButton/IconTextButton";
import { MdModeEdit } from "react-icons/md";
import "./ProfileHeader.css";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <Col className="profile-header-details container-clean">
        <Col className="profile-upper-header-details container-clean">
          <Col className="profile-upper-left-header-details container-clean">
            <div className="profile-header-image">
              <img
                src="https://loremflickr.com/1920/1080?lock=14"
                alt="profile"
              />
            </div>

            <Container className="profile-header-user-details px-4">
              <Row className="profile-header-row">
                <img src={user.profilePicture} alt="profile" />
                <Col className="profile-header-name-friends">
                  <h3>{user.username}</h3>
                  <p className="friends-num-text">
                    {user.friends.length} Friends
                  </p>
                  <ProfileUserFriendIconRow friendsList={user.friends} />
                </Col>
              </Row>

              <Row className="profile-upper-right-header-details">
                <IconTextButton
                  className="profile-edit-button"
                  icon={MdModeEdit}
                >
                  Edit Profile
                </IconTextButton>
              </Row>
            </Container>
          </Col>

          <Row className="profile-lower-header-details">
            <hr />
            <ButtonTabGroup>
              <>Posts</>
              <>About</>
              <>Friends</>
              <>Photos</>
            </ButtonTabGroup>
          </Row>
        </Col>
      </Col>
    </div>
  );
};

export default ProfileHeader;
