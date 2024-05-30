import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu/NavMenu";
import { Container, Row, Col } from "reactstrap";
import ThemeToggleDev from "./ThemeToggle/ThemeToggleDev";
import Sidebar from "./Sidebar/Sidebar";
import useWindowSize from "../hooks/UseScreenSize"; // Import the custom hook

export const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useWindowSize();

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(false); // Ensure sidebar is closed on desktop view
    }
  }, [isDesktop]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Container fluid>
      <NavMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <ThemeToggleDev />
      <Row>
        <Col
          xs="12"
          md="3"
          className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}
        >
          <Sidebar />
        </Col>
        <Col xs="12" md={isSidebarOpen ? "12" : "9"}>
          {!isSidebarOpen && children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
