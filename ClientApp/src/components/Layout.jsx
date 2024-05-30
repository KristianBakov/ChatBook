import React, { useState } from "react";
import NavMenu from "./NavMenu/NavMenu";
import { Container, Row, Col } from "reactstrap";
import ThemeToggleDev from "./ThemeToggle/ThemeToggleDev";
import Sidebar from "./Sidebar/Sidebar";

export const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Container fluid>
      <NavMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <ThemeToggleDev />
      <Row>
        {isSidebarOpen ? (
          <Col xs="12" md="3" className="sidebar-container">
            <Sidebar />
          </Col>
        ) : (
          <Col xs="12" md="9">
            {children}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Layout;
