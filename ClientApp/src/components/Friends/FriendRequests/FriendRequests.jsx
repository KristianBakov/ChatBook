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
        {/*If no requests shows this */}
        <h2>Friend Requests</h2>
        <p>No new requests</p>
      </div>
      {/*If there is requests shows this */}
      <div className="user-grid row">
        {friendRequests.map((user, index) => (
          <FriendRequestCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FriendRequests;
