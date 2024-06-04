import React from "react";
import { Button } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import "./TextButton.css";

const IconTextButton = ({ icon: Icon, children, isNavLink, to }) => {
  const buttonClasses = "btn btn-nav d-flex w-100 text-left align-items-center";

  if (isNavLink && to) {
    return (
      <Button tag={RouterLink} to={to} className={buttonClasses}>
        {Icon && <Icon className="nav-icon mr-2" />}
        {children}
      </Button>
    );
  }

  return (
    <Button className={buttonClasses}>
      {Icon && <Icon className="nav-icon mr-2" />}
      {children}
    </Button>
  );
};

export default IconTextButton;
