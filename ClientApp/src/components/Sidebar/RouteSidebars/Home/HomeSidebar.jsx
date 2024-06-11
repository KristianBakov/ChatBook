import React from "react";
import HomeSidebarLinks from "./HomeSidebarLinks";
import FriendsList from "../../FriendsList/FriendsList";
import Sidebar from "../../Sidebar";

const HomeSidebar = ({ isSidebarOpen }) => {
  return (
    <Sidebar>
      <HomeSidebarLinks />
      <FriendsList />
    </Sidebar>
  );
};

export default HomeSidebar;
