import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  CardLink,
  Container,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import HrContainer from "../Containers/HrContainer";
import IconTextButton from "../Buttons/TextButton/IconTextButton";
import IconCircleButton from "../Buttons/IconCircleButton/IconCircleButton";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import PhotoCollage from "../PhotoCollage/PhotoCollage";
import "./Post.css";
import UserTextButton from "../Buttons/UserTextButton/UserTextButton";

//TODO: Replace post-user-container with UserTextButton or alternative
const Post = ({
  title,
  time = "just now",
  message,
  likeNum,
  commentNum,
  photos,
}) => {
  return (
    <Card className="mb-3">
      <CardBody className="post-wrapper">
        <Container className="post-header px-0 pb-2">
          <Container className="post-user-container p-0">
            <img
              className="post-user-image"
              src="https://loremflickr.com/42/42"
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

      {photos && photos.length > 0 && (
        <div className="post-collage-container">
          <PhotoCollage postOwner={title} photos={photos} />
        </div>
      )}

      <CardBody className="post-bottom-group">
        <Container className="post-stats">
          <CardLink className="post-stat-link" href="/">
            {likeNum} Likes
          </CardLink>
          <CardLink className="post-stat-link" href="/">
            {commentNum} Comments
          </CardLink>
        </Container>
        <HrContainer className="post-button-container">
          <IconTextButton icon={AiOutlineLike} className="post-button">
            Like
          </IconTextButton>
          <IconTextButton icon={FaRegComment} className="post-button">
            Comment
          </IconTextButton>
          <IconTextButton icon={RiShareForwardLine} className="post-button">
            Share
          </IconTextButton>
        </HrContainer>

        {commentNum > 0 && (
          <Container className="post-comments-container">
            <Container className="post-comment-header">
              <Button tag={CardLink} className="post-comment-view-btn">
                View all {commentNum} comments
              </Button>
            </Container>

            <Container className="post-comment">
              <UserTextButton
                user={{
                  name: title,
                  profileIcon: "https://loremflickr.com/42/42",
                }}

                // onClick={() => {   open the modal here  }}
              />
              <CardText className="post-comment-text">
                Comment text goes here
              </CardText>

              <Container className="post-comment-actions">
                <Button tag={CardLink} className="post-comment-time">
                  1d
                </Button>
                <IconTextButton icon={AiOutlineLike} className="post-action">
                  Like
                </IconTextButton>
                <IconTextButton icon={FaRegComment} className="post-action">
                  Reply
                </IconTextButton>
              </Container>
            </Container>

            <Container className="post-self-comment-container">
              <img
                className="post-self-comment-image"
                src="https://loremflickr.com/42/42"
                alt="User"
              />

              <FormGroup>
                <Input
                  id="user-comment-input"
                  name="comment"
                  placeholder="Write a comment..."
                  type="text"
                />
              </FormGroup>
            </Container>
          </Container>
        )}
      </CardBody>
    </Card>
  );
};

export default Post;
