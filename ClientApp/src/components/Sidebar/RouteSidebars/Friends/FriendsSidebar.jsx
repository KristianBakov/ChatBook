import React from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import IconTextButton from "../../../Buttons/TextButton/IconTextButton";

const FriendsSidebar = ({ activeMenu, setActiveMenu }) => {
  return (
    <Col sm="2" className="bg-transparent sidebar py-4">
      <Nav vertical>
        <NavItem>
          <IconTextButton
            className={activeMenu === "home" ? "active" : ""}
            onClick={() => setActiveMenu("home")}
          >
            Home
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={activeMenu === "friendRequests" ? "active" : ""}
            onClick={() => setActiveMenu("friendRequests")}
          >
            Friend requests
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={activeMenu === "suggestions" ? "active" : ""}
            onClick={() => setActiveMenu("suggestions")}
          >
            Suggestions
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={activeMenu === "allFriends" ? "active" : ""}
            onClick={() => setActiveMenu("allFriends")}
          >
            All friends
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={activeMenu === "birthdays" ? "active" : ""}
            onClick={() => setActiveMenu("birthdays")}
          >
            Birthdays
          </IconTextButton>
        </NavItem>
      </Nav>
    </Col>
  );
};

export default FriendsSidebar;
