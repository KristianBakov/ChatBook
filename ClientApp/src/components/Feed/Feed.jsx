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
      likes: 5,
      comments: 2,
    },
    {
      id: 2,
      user: "Jane Smith",
      title: "Hi there!",
      message: "React is awesome!",
      likes: 11,
      comments: 3,
    },
  ];

  const photos = [
    { source: "https://loremflickr.com/640/480?lock=1" },
    { source: "https://loremflickr.com/640/480?lock=2" },
    { source: "https://loremflickr.com/640/480?lock=3" },
    { source: "https://loremflickr.com/640/480?lock=4" },
    { source: "https://loremflickr.com/640/480?lock=5" },
    { source: "https://loremflickr.com/640/480?lock=6" },
    { source: "https://loremflickr.com/640/480?lock=7" },
  ];

  return (
    <Container className="col feed-wrapper">
      <div className="col-md-8 px-3">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.user}
            message={post.message}
            likeNum={post.likes}
            commentNum={post.comments}
            photos={photos}
          />
        ))}
      </div>
    </Container>
  );
};

export default Feed;
