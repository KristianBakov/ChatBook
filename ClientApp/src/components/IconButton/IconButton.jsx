import React from "react";
import { Button } from "reactstrap";

const IconButton = ({ icon: Icon, children }) => {
  return (
    <Button color="transparent" className="d-flex align-items-center">
      {Icon && <Icon className="mr-2" />}
      {children}
    </Button>
  );
};

export default IconButton;
