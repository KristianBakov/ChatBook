import React from "react";
import SidebarLinks from "./SidebarLinks";
import FriendsList from "./FriendsList/FriendsList";
import { Container } from "reactstrap";

const Sidebar = () => {
  return (
    <Container className="col">
      <SidebarLinks />
      <FriendsList />
    </Container>
  );
};

export default Sidebar;
