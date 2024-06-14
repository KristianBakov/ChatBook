import { useState } from "react";
import FriendsSidebar from "../../components/Sidebar/RouteSidebars/Friends/FriendsSidebar";
import { Container } from "reactstrap";
import FriendRequests from "../../components/Friends/FriendRequests/FriendRequests";
import "./Friends.css";

const Friends = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const renderContent = () => {
    switch (activeMenu) {
      case "friendRequests":
        return <FriendRequests />;
      // case "suggestions":
      //   return <UserGrid />;
      // case "allFriends":
      //   return <UserGrid />;
      // case "birthdays":
      //   return <Birthdays />;

      default:
        return <FriendRequests />;
    }
  };

  return (
    <Container fluid className="row friends-page">
      <Container className="friends-sidebar-wrapper">
        <FriendsSidebar
          className="fixed-sidebar"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </Container>
      {renderContent()}
    </Container>
  );
};

export default Friends;
