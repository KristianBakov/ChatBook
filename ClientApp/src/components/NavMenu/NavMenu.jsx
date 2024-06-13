import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import ThemeToggleDev from "../ThemeToggle/ThemeToggleDev";
import { MdHome } from "react-icons/md";
import { FaUserFriends, FaCompass, FaRegUserCircle } from "react-icons/fa";
import NavTabButton from "./NavTabButton/NavTabButton";

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path === "/" ? "home" : path.split("/")[1]);
  }, []);

  return (
    <header>
      <Navbar className="fixed-top navbar-expand-md navbar-toggleable-md border-bottom box-shadow">
        <NavbarBrand tag={Link} to="/">
          ChatBook
          <ThemeToggleDev />
        </NavbarBrand>

        <Nav className="tabs-container" navbar>
          <NavItem className="nav-item-main">
            <NavTabButton
              icon={MdHome}
              tag={Link}
              to="/"
              isActive={activeTab === "home"}
              onClick={() => handleTabClick("home")}
            >
              Home
            </NavTabButton>
            <NavTabButton
              icon={FaUserFriends}
              tag={Link}
              to="/friends"
              isActive={activeTab === "friends"}
              onClick={() => handleTabClick("friends")}
            >
              Friends
            </NavTabButton>
            <NavTabButton
              icon={FaCompass}
              tag={Link}
              to="/discover"
              isActive={activeTab === "discover"}
              onClick={() => handleTabClick("discover")}
            >
              Discover
            </NavTabButton>
            <NavTabButton
              icon={FaRegUserCircle}
              tag={Link}
              to="/profile/1"
              isActive={activeTab === "profile"}
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </NavTabButton>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavMenu;
