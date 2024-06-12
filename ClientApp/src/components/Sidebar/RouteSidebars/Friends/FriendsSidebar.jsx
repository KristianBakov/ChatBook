import React from "react";
import { Col, Nav, NavItem } from "reactstrap";
import IconTextButton from "../../../Buttons/TextButton/IconTextButton";
import "./FriendsSidebar.css";

const FriendsSidebar = ({ activeMenu, setActiveMenu }) => {
  const buttonClasses = (menu) => {
    return "friends-tab " + (activeMenu === menu ? "active" : "");
  };
  const test = () => {
    console.log("test");
  };

  return (
    <Col sm="3" className="bg-transparent sidebar friends-sidebar py-4">
      <Nav vertical>
        <NavItem>
          <IconTextButton
            className={buttonClasses("home")}
            onClick={() => setActiveMenu("home")}
          >
            Home
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={buttonClasses("friendRequests")}
            onClick={() => setActiveMenu("friendRequests")}
          >
            Friend requests
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={buttonClasses("suggestions")}
            onClick={() => setActiveMenu("suggestions")}
          >
            Suggestions
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={buttonClasses("allFriends")}
            onClick={() => setActiveMenu("allFriends")}
          >
            All friends
          </IconTextButton>
        </NavItem>
        <NavItem>
          <IconTextButton
            className={buttonClasses("birthdays")}
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
