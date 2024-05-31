import React, { useState, useEffect } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import useWindowSize from "../../hooks/UseScreenSize";
import "./Layout.css";

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
    <Container fluid className="container-clean">
      <NavMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Row>
        <Col
          xs="12"
          md="2"
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
