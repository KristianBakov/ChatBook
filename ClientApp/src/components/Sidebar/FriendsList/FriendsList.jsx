import React from "react";
import { Container, Col } from "reactstrap";
import ImageTextButton from "../../Buttons/TextButton/ImageTextButton";
import UserIcon from "../../../assets/icons/usertempicon.webp";
import "./FriendsList.css";

const FriendsList = () => {
  const friends = [
    "Alice",
    "Bob",
    "Charlie",
    "Dave",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
    "Mallory",
    "Oscar",
    "Peggy",
  ];

  return (
    <Container className="py-4 px-0">
      <Col className="friends-list-container">
        <h5>Contacts</h5>
        <div className="friends-list-scroll">
          {friends.map((friend) => (
            <ImageTextButton hasImage imageSrc={UserIcon} key={friend}>
              {friend}
            </ImageTextButton>
          ))}
        </div>
      </Col>
    </Container>
  );
};

export default FriendsList;
