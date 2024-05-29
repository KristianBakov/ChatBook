import React from "react";
import SidebarLinks from "./SidebarLinks";
import FriendsList from "./FriendsList";
import { Container } from "reactstrap";

const FriendsAndSocial = () => {
  return (
    <Container className="col">
      <SidebarLinks />
      <FriendsList />
    </Container>
  );
};

export default FriendsAndSocial;
