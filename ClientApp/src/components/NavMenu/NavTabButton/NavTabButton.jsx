import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import "./NavTabButton.css";

const NavTabButton = ({ icon: Icon, isActive, onClick, to, children }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const buttonClasses =
    "btn btn-tab align-items-center " + (isActive ? "selected" : "");

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <Button
        id={`nav-tab-button-${children}`}
        tag={RouterLink}
        to={to}
        className={buttonClasses}
        onClick={onClick}
      >
        {Icon && <Icon className="tab-icon" />}
      </Button>
      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target={`nav-tab-button-${children}`}
        toggle={toggleTooltip}
        className="tab-tooltip"
      >
        {children}
      </Tooltip>
    </>
  );
};

export default NavTabButton;
