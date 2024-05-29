import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import { Container } from "reactstrap";
import ThemeToggleDev from "./ThemeToggle/ThemeToggleDev";

export const Layout = ({ children }) => {
  return (
    <Container>
      <NavMenu />
      <ThemeToggleDev />
      <div className="container-fluid">{children}</div>
    </Container>
  );
};
