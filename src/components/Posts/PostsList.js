import React from "react";
import { Link } from "react-router-dom";

export default function PostsList({ posts, topic }) {
  console.log("PostsList[topic]: ", topic.topic);
  console.log("PostsList[posts]: ", posts);
  return (
    <div>
      <h2>{topic.topic}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>
              {post.title}
              {`(${post.views})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
