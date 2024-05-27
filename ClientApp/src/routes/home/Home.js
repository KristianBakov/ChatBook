import React from 'react';
import Sidebar from '../../components/Sidebar';
import NewsFeed from '../../components/NewsFeed';
import FriendsList from '../../components/FriendsList';

const Home = () => {
    return (
        <div className="row">
            <Sidebar />
            <NewsFeed />
            <FriendsList />
        </div>
    );
};

export default Home;
