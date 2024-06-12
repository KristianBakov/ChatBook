import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

import "./FriendRequestCard.css";

//TODO: Change the user.name to user.id based on data

const FriendRequestCard = ({ user }) => {
  return (
    <Card className="user-card">
      <img src={user.image} alt={user.name} />
      <CardBody className="user-info">
        <Button tag={CardLink} href={`/user/${user.name}`}>
          {user.name}
        </Button>

        {user.mutualFriends && (
          <CardSubtitle className="user-card-mutual-friends mb-2">
            {user.mutualFriends} mutual friends
          </CardSubtitle>
        )}

        <ButtonGroup vertical className="user-actions">
          <Button className="mb-2 rounded user-card-btn user-accept-btn">
            Accept Friend
          </Button>
          <Button className="rounded user-card-btn">Remove Request</Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default FriendRequestCard;
