import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../../context/PostContext";
import PageNumbers from "./PageNumbers";

import "../../../styles/Components/Pagination.scss";

export default function Pagination({ postType }) {
  //5 per page
  const { posts } = useContext(PostContext);
  const [curpage, setCurpage] = useState(1);
  const [limit, setLimit] = useState(3);

  const lastPostIdx = curpage * limit;
  const firstPostIdx = lastPostIdx - limit;
  const sameTypePosts = posts.filter((post) => post.postType === postType.id);
  const curPost = sameTypePosts.slice(firstPostIdx, lastPostIdx);

  const paginate = (pageNum, e) => {
    console.log(pageNum);
    e.preventDefault();
    setCurpage(pageNum);
  };

  return (
    <div className="thumbpost__container">
      <ul className="thumbpost__container__postlist">
        <h3 style={{ textDecoration: "underline" }}>{postType.name}</h3>
        {curPost.length === 0 ? (
          <h1>No post Yet</h1>
        ) : (
          curPost.map((post) => {
            return (
              <Link
                className="thumbpost__container__postitem"
                to={`/post/${post._id}`}
              >
                <li key={post._id}>{post.title}</li>
              </Link>
            );
            //here url a tag
          })
        )}
      </ul>
      <PageNumbers
        limit={limit}
        totalPosts={sameTypePosts.length}
        paginate={paginate}
        curpage={curpage}
      />
    </div>
  );
}
