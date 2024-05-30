import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";

const SidebarLinks = () => {
  return (
    <div className=" bg-transparent sidebar">
      <Nav vertical>
        <NavItem>
          <IconButton tag={Link} isNavLink to="/">
            Home
          </IconButton>
        </NavItem>
        <NavItem>
          <IconButton tag={Link} isNavLink to="/profile">
            Profile
          </IconButton>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/messages">
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/notifications">
            Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/settings">
            Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SidebarLinks;
