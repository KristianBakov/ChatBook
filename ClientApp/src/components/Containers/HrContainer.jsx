import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";

const HrContainer = ({ children, className }) => {
  const classes = classNames(className);
  return (
    <>
      <hr />
      <Container className={classes}>{children}</Container>
      <hr />
    </>
  );
};

export default HrContainer;
