import React from "react";
import { Col } from "reactstrap";

const AdSidebar = ({ isSidebarOpen }) => {
  return (
    <Col
      className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}
      style={{ backgroundColor: "lightblue" }}
    ></Col>
  );
};

export default AdSidebar;
