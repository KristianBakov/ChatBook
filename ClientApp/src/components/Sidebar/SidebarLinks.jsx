import React from "react";
import { Nav, NavItem } from "reactstrap";
import IconTextButton from "../Buttons/TextButton/IconTextButton";

const SidebarLinks = () => {
  return (
    <div className=" bg-transparent sidebar py-4">
      <Nav vertical>
        <NavItem>
          <IconTextButton className="w-100" isNavLink to="/">
            Home
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton className="w-100" isNavLink to="/profile">
            Profile
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton className="w-100" to="/messages">
            Messages
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton className="w-100" to="/notifications">
            Notifications
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton className="w-100" to="/settings">
            Settings
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton className="w-100" to="/logout">
            Logout
          </IconTextButton>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SidebarLinks;
