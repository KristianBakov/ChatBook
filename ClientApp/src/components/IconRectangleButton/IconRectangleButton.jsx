import React from "react";
import { Button } from "reactstrap";
import "./IconRectangleButton.css";

const IconRectangleButton = ({ icon: Icon }) => {
  const buttonClasses = "btn btn-rect align-items-center";

  return (
    <Button className={buttonClasses}>
      {Icon && <Icon className="rect-icon" />}
    </Button>
  );
};

export default IconRectangleButton;
