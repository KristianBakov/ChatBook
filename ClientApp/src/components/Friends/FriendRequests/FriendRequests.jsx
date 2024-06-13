import { Container } from "reactstrap";
import FriendRequestCard from "../FriendRequestCard/FriendRequestCard";
import "./FriendRequests.css";

const friendRequests = [
  {
    image: "https://via.placeholder.com/300",
    name: "Aziz Monkey",
    mutualFriends: 5,
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Kristine Panda",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Alice Johnson",
    mutualFriends: 8,
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Bob Brown",
    mutualFriends: 3,
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Charlie White",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Dana Lee",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Eva Green",
  },
];

const FriendRequests = () => {
  return (
    <div className="friends-page-content py-2">
      <div className="friend-requests">
        <h2 className="friends-page-title">Friend Requests</h2>
        {friendRequests.length === 0 ? (
          <p>No new requests</p>
        ) : (
          <div className="user-grid row">
            {friendRequests.map((user, index) => (
              <FriendRequestCard key={index} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendRequests;
