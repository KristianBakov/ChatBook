import { useState } from "react";
import FriendsSidebar from "../../components/Sidebar/RouteSidebars/Friends/FriendsSidebar";
import { Col, Row } from "reactstrap";
import FriendRequests from "../../components/Friends/FriendRequests/FriendRequests";

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
    <Row>
      <FriendsSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Col sm="9">{renderContent()}</Col>
    </Row>
  );
};

export default Friends;
