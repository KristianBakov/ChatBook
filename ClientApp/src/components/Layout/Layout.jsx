import React, { useState, useEffect } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Container, Row, Col } from "reactstrap";
import MainSidebar from "../Sidebar/MainSidebar";
import useWindowSize from "../../hooks/UseScreenSize";
import "./Layout.css";
import AdSidebar from "../Sidebar/AdSidebar/AdSidebar";

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
      <Row className="layout-row">
        <MainSidebar isSidebarOpen={isSidebarOpen} />

        <Col xs="12" md={isSidebarOpen ? "12" : "9"}>
          {!isSidebarOpen && children}
        </Col>

        <AdSidebar />
      </Row>
    </Container>
  );
};

export default Layout;
