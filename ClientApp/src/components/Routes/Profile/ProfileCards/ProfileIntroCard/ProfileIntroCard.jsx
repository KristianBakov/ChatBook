import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./ProfileIntroCard.css";

const ProfileIntroCard = ({ user }) => {
  return (
    <Card className="profile-card">
      <CardBody>
        <CardTitle className="profile-card-title">Intro</CardTitle>
        <CardText className="profile-card-text">op</CardText>
      </CardBody>
    </Card>
  );
};

export default ProfileIntroCard;
