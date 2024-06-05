import React from "react";
import { Button } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import classNames from "classnames";
import "./TextButton.css";

const IconTextButton = ({ icon: Icon, children, isNavLink, to, className }) => {
  const buttonClasses = classNames("btn btn-nav align-items-center", className);

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
