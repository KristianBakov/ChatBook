import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import ThemeToggleDev from "../ThemeToggle/ThemeToggleDev";
import { MdHome } from "react-icons/md";
import { FaUserFriends, FaCompass, FaRegUserCircle } from "react-icons/fa";
import NavTabButton from "./NavTabButton/NavTabButton";

const NavMenu = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header>
      <Navbar
        className="navbar-expand-md navbar-toggleable-md border-bottom box-shadow mb-3"
        light
      >
        <NavbarBrand tag={Link} to="/">
          ChatBook
        </NavbarBrand>

        <NavbarToggler onClick={toggleSidebar} className="mr-2" />

        <NavItem>
          <ThemeToggleDev />
        </NavItem>
        <NavItem className="tabs-container d-none d-md-flex">
          <NavTabButton icon={MdHome} tag={Link} to="/">
            Home
          </NavTabButton>
          <NavTabButton icon={FaUserFriends} tag={Link} to="/">
            Friends
          </NavTabButton>
          <NavTabButton icon={FaCompass} tag={Link} to="/">
            Discover
          </NavTabButton>
          <NavTabButton icon={FaRegUserCircle} tag={Link} to="/">
            Profile
          </NavTabButton>
        </NavItem>
        <Collapse isOpen={isSidebarOpen} navbar>
          {/* extra menu items for the collapse here */}
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
