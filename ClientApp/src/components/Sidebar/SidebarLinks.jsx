import React from "react";
import { Nav, NavItem } from "reactstrap";
import IconButton from "../IconButton/IconButton";

const SidebarLinks = () => {
  return (
    <div className=" bg-transparent sidebar">
      <Nav vertical>
        <NavItem>
          <IconButton isNavLink to="/">
            Home
          </IconButton>
        </NavItem>
        <NavItem>
          <IconButton isNavLink to="/profile">
            Profile
          </IconButton>
        </NavItem>
        <NavItem>
          <IconButton to="/messages">Messages</IconButton>
        </NavItem>
        <NavItem>
          <IconButton to="/notifications">Notifications</IconButton>
        </NavItem>
        <NavItem>
          <IconButton to="/settings">Settings</IconButton>
        </NavItem>
        <NavItem>
          <IconButton to="/logout">Logout</IconButton>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SidebarLinks;
