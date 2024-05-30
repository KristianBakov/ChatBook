import React from "react";
import { Button } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import "./IconCircleButton.css";

const IconCircleButton = ({ icon: Icon, isNavLink, to }) => {
  const buttonClasses = "btn btn-circle";

  if (isNavLink && to) {
    return (
      <Button tag={RouterLink} to={to} className={buttonClasses}>
        {Icon && <Icon className="circle-icon" />}
      </Button>
    );
  }

  return (
    <Button className={buttonClasses}>
      {Icon && <Icon className="circle-icon" />}
    </Button>
  );
};

export default IconCircleButton;
