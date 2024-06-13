import React, { useState, useEffect } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Container } from "reactstrap";
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

      <div className="layout-box">{children}</div>
      {/* 
      <Row className="layout-row">
        <MainSidebar
          md="3"
          isSidebarOpen={isSidebarOpen}
          className="d-none d-md-block"
        />

        <Col xs="12" md={isSidebarOpen ? "12" : "6"}>
          {!isSidebarOpen && children}
        </Col>

        <AdSidebar
          md="3"
          isSidebarOpen={isSidebarOpen}
          className="d-none d-md-block"
        />
      </Row> */}
    </Container>
  );
};

export default Layout;
