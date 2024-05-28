import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-2 bg-transparent sidebar">
      <Nav vertical>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            Profile
          </NavLink>
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

export default Sidebar;
