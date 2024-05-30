import React from "react";

const Feed = () => {
  const posts = [
    { id: 1, user: "John Doe", content: "Hello, this is my first post!" },
    { id: 2, user: "Jane Smith", content: "React is awesome!" },
  ];

  return (
    <div className="col-md-8">
      {posts.map((post) => (
        <div key={post.id} className="card post-container mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.user}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
