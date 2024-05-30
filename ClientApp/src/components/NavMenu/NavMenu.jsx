import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <NavbarBrand tag={Link} to="/">
          ChatBook
        </NavbarBrand>
        <NavbarToggler onClick={toggleSidebar} className="mr-2" />
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse d-md-none"
          isOpen={isSidebarOpen}
          navbar
        >
          {/* extra menu items for the collapse here */}
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
