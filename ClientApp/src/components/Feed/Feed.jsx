import React from "react";
import { Container } from "reactstrap";
import Post from "../Post/Post";

const Feed = () => {
  const posts = [
    {
      id: 1,
      user: "John Doe",
      title: "Hi",
      message: "Hello, this is my first post!",
    },
    {
      id: 2,
      user: "Jane Smith",
      title: "Hi there!",
      message: "React is awesome!",
    },
  ];

  return (
    <Container className="col feed-wrapper">
      <div className="col-md-8 px-3">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.user}
            message={post.message}
            hasImage
          />
        ))}
      </div>
    </Container>
  );
};

export default Feed;
