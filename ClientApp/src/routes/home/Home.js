import React from "react";
import NewsFeed from "../../components/NewsFeed";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="row">
      {/* <Sidebar /> */}
      <NewsFeed />
    </div>
  );
};

export default Home;
