import React from "react";
import { Card, CardBody } from "reactstrap";
import "./ProfileCard.css";

const ProfileCard = ({ children }) => {
  return (
    <Card className="profile-card">
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ProfileCard;
