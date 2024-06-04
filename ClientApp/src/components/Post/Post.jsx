import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import IconTextButton from "../Buttons/TextButton/IconTextButton";

const Post = ({ title, time, message, hasImage, imgSrc }) => {
  return (
    <Card>
      <CardBody>
        <CardLink href="/">{title}</CardLink>
        <CardSubtitle>{time + " m"}</CardSubtitle>
        <CardText>{message}</CardText>
      </CardBody>

      {hasImage && (
        <CardImg
          className="rounded-0"
          width="100%"
          src="https://loremflickr.com/640/480?lock=1"
          alt="Post Image"
        />
      )}

      <CardBody className="post-button-container">
        <IconTextButton className="post-button" color="primary">
          Like
        </IconTextButton>
        <IconTextButton className="post-button" color="secondary">
          Comment
        </IconTextButton>
        <IconTextButton className="post-button" color="danger">
          Share
        </IconTextButton>
      </CardBody>
    </Card>
  );
};

export default Post;
