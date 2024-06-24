import React from "react";
import { Button, CardText, CardTitle, Container } from "reactstrap";
import "./ProfileCardInfoSection.css";

const ProfileCardInfoSection = ({ sectionName = "Section", userProp = "" }) => {
  const className = sectionName.replace(/\s+/g, "").toLowerCase();
  return (
    <Container className="profile-card-info-section">
      <CardTitle className="profile-card-title">{sectionName}</CardTitle>
      {userProp ? (
        <CardText className={`profile-${className}-text`}>{userProp}</CardText>
      ) : (
        <Button className={`profile-add-section-btn`}>
          Add {sectionName.toLowerCase()}
        </Button>
      )}
    </Container>
  );
};

export default ProfileCardInfoSection;
