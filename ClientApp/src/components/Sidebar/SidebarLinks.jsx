import React from "react";
import { Nav, NavItem } from "reactstrap";
import IconTextButton from "../IconTextButton/IconTextButton";

const SidebarLinks = () => {
  return (
    <div className=" bg-transparent sidebar">
      <Nav vertical>
        <NavItem>
          <IconTextButton isNavLink to="/">
            Home
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton isNavLink to="/profile">
            Profile
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton to="/messages">Messages</IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton to="/notifications">Notifications</IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton to="/settings">Settings</IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton to="/logout">Logout</IconTextButton>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SidebarLinks;
