import { useState } from "react";
import FriendsSidebar from "../../components/Sidebar/RouteSidebars/Friends/FriendsSidebar";
import { Col, Row } from "reactstrap";

const Friends = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const renderContent = () => {
    return <div>Friends</div>;
    // switch (activeMenu) {
    //   case "friendRequests":
    //     return <FriendRequests />;
    //   case "suggestions":
    //     return <UserGrid />;
    //   case "allFriends":
    //     return <UserGrid />;
    //   case "birthdays":
    //     return <Birthdays />;

    //   default:
    //     return <UserGrid />;
    // }
  };

  return (
    <Row>
      <FriendsSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Col sm="9" className="content">
        {renderContent()}
      </Col>
    </Row>
  );
};

export default Friends;
