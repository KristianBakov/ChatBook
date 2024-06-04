import React from "react";
import { Button } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import "./TextButton.css";

const IconTextButton = ({ hasImage, imageSrc, children, isNavLink, to }) => {
  const buttonClasses = "btn btn-nav btn-nav-img d-flex w-100 text-left align-items-center";

  if (isNavLink && to) {
    return (
      <Button tag={RouterLink} to={to} className={buttonClasses}>
        {hasImage && (
          <img
            src={imageSrc}
            className="btn-img mr-2"
            alt={children + " image"}
          />
        )}
        {children}
      </Button>
    );
  }

  return (
    <Button className={buttonClasses}>
      {hasImage && (
        <img
          src={imageSrc}
          className="btn-img mr-2"
          alt={children + " image"}
        />
      )}
      {children}
    </Button>
  );
};

export default IconTextButton;
