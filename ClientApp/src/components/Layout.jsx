import React from "react";
import Header from "./Header";
import { Container } from "reactstrap";
import ThemeToggleDev from "./ThemeToggle/ThemeToggleDev";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ThemeToggleDev />
      <div className="container-fluid">{children}</div>
    </Container>
  );
};
