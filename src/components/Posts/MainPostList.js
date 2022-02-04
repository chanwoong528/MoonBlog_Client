import React from "react";
import { Link } from "react-router-dom";

export default function MainPostList({ posts }) {
  console.log("MainPostList[post]: ", posts);

  return (
    <div>
      <h1>Main Post List</h1>
      <ul>
        {posts.map((post) => (
          <Link to={`/post/${post._id}`}>
            <li key={post._id}>
              {post.title}
              {`(${post.views})`}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
