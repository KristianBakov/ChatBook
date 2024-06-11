import { useState } from "react";
import FriendsSidebar from "../../components/Sidebar/RouteSidebars/Friends/FriendsSidebar";

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
    <>
      <FriendsSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">{renderContent()}</div>
    </>
  );
};

export default Friends;
