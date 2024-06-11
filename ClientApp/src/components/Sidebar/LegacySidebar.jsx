import React from "react";
import HomeSidebarLinks from "./HomeSidebarLinks";
import FriendsList from "../../FriendsList/FriendsList";
import { Col } from "reactstrap";

const LegacySidebar = ({ isSidebarOpen }) => {
  return (
    <Col className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
      <HomeSidebarLinks />
      <FriendsList />
    </Col>
  );
};

export default LegacySidebar;
