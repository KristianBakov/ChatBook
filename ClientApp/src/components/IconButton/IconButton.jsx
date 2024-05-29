import React from "react";
import { Button } from "reactstrap";

const IconButton = ({ icon, children }) => {
  return (
    <Button color="transparent" className="d-flex align-items-center">
      {icon && <img src={icon} alt="Icon" className="mr-2" />}
      {children}
    </Button>
  );
};

export default IconButton;
