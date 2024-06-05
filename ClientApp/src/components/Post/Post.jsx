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
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import "./Post.css";

const Post = ({ title, time = "just now", message, hasImage, imgSrc }) => {
  return (
    <Card>
      <CardBody>
        <CardLink href="/">{title}</CardLink>
        <CardSubtitle className="post-time">{time}</CardSubtitle>
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
        <IconTextButton
          icon={AiOutlineLike}
          className="post-button"
          color="primary"
        >
          Like
        </IconTextButton>
        <IconTextButton
          icon={FaRegComment}
          className="post-button"
          color="secondary"
        >
          Comment
        </IconTextButton>
        <IconTextButton
          icon={RiShareForwardLine}
          className="post-button"
          color="danger"
        >
          Share
        </IconTextButton>
      </CardBody>
    </Card>
  );
};

export default Post;
