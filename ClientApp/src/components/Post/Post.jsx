import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  CardLink,
  Container,
} from "reactstrap";
import IconTextButton from "../Buttons/TextButton/IconTextButton";
import IconCircleButton from "../Buttons/IconCircleButton/IconCircleButton";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import "./Post.css";

const Post = ({ title, time = "just now", message, hasImage, imgSrc }) => {
  return (
    <Card className="mb-3">
      <CardBody className="post-wrapper">
        <Container className="post-header px-0 pb-2">
          <Container className="post-user-container p-0">
            <img
              className="post-user-image"
              src="https://loremflickr.com/50/50"
              alt="User"
            />
            <Container className="post-title-container pl-2">
              <CardLink className="post-title" href="/">
                {title}
              </CardLink>
              <CardSubtitle className="post-time">{time}</CardSubtitle>
            </Container>
          </Container>

          <div className="post-actions-container">
            <IconCircleButton icon={FaBookmark} className="post-action">
              Save
            </IconCircleButton>
          </div>
        </Container>
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
