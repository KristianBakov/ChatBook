import React from "react";
import NewsFeed from "../../components/NewsFeed";
import FriendsAndSocial from "../../components/FriendsAndSocial/FriendsAndSocial";

const Home = () => {
  return (
      <div className="row">
          <FriendsAndSocial />
          <NewsFeed />
    </div>
  );
};

export default Home;
