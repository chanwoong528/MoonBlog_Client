import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Components/PostsList.scss";
export default function PostsList({ posts, topic }) {
  console.log("PostsList[topic]: ", topic.topic);
  console.log("PostsList[posts]: ", posts);
  return (
    <div className="post-list">
      <h2 className="post-list__title">
        {topic._id === "0" ? "All Articles" : topic.topic}
      </h2>
      <ul className="post-list__list">
        {posts.map((post) => (
          <li className="post-list__item" key={post._id}>
            <Link className="post-list__link" to={`/post/${post._id}`}>
              {post.title}
              {`(${post.views})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
