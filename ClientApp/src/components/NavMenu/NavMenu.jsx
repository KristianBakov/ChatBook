import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Nav,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import ThemeToggleDev from "../ThemeToggle/ThemeToggleDev";
import { MdHome } from "react-icons/md";
import { FaUserFriends, FaCompass, FaRegUserCircle } from "react-icons/fa";
import NavTabButton from "./NavTabButton/NavTabButton";

const NavMenu = ({ toggleSidebar, isSidebarOpen }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-md navbar-toggleable-md border-bottom box-shadow mb-3"
        light
      >
        <NavbarBrand tag={Link} to="/">
          ChatBook
          <ThemeToggleDev />
        </NavbarBrand>

        <NavbarToggler onClick={toggleSidebar} className="mx-2" />

        <Nav className="tabs-container d-none d-md-flex">
          <NavItem>
            <NavTabButton
              icon={MdHome}
              tag={Link}
              to="/"
              isActive={activeTab === "Home"}
              onClick={() => handleTabClick("Home")}
            >
              Home
            </NavTabButton>
            <NavTabButton
              icon={FaUserFriends}
              tag={Link}
              to="/friends"
              isActive={activeTab === "Friends"}
              onClick={() => handleTabClick("Friends")}
            >
              Friends
            </NavTabButton>
            <NavTabButton
              icon={FaCompass}
              tag={Link}
              to="/discover"
              isActive={activeTab === "Discover"}
              onClick={() => handleTabClick("Discover")}
            >
              Discover
            </NavTabButton>
            <NavTabButton
              icon={FaRegUserCircle}
              tag={Link}
              to="/profile/1"
              isActive={activeTab === "Profile"}
              onClick={() => handleTabClick("Profile")}
            >
              Profile
            </NavTabButton>
          </NavItem>
        </Nav>

        <Collapse isOpen={isSidebarOpen} navbar>
          {/* extra menu items for the collapse here */}
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
