import React from "react";
import SidebarLinks from "./SidebarLinks";
import FriendsList from "./FriendsList/FriendsList";
import { Col } from "reactstrap";

const MainSidebar = ({ isSidebarOpen }) => {
  return (
    <Col className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
      <SidebarLinks />
      <FriendsList />
    </Col>
  );
};

export default MainSidebar;