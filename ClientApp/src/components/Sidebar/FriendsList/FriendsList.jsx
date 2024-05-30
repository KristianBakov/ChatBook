import React from "react";
import { Container, Col } from "reactstrap";
import IconTextButton from "../../IconTextButton/IconTextButton";
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
    <Container>
      <Col className="friends-list-container">
        <h5>Contacts</h5>
        <div className="friends-list-scroll">
          {friends.map((friend) => (
            <IconTextButton key={friend}>{friend}</IconTextButton>
          ))}
        </div>
      </Col>
    </Container>
  );
};

export default FriendsList;
