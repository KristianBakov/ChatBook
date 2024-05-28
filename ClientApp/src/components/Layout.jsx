import React from "react";
import Header from "./Header";
import { Container } from "reactstrap";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ThemeToggle />
      <div className="container-fluid">{children}</div>
    </Container>
  );
};
