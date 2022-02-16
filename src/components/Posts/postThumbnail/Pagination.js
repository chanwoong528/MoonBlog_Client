import React, { useState, useContext } from "react";

import { PostContext } from "../../../context/PostContext";
import PageNumbers from "./PageNumbers";

export default function Pagination({ postType }) {
  //5 per page
  const { posts } = useContext(PostContext);
  const [curpage, setCurpage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastPostIdx = curpage * limit;
  const firstPostIdx = lastPostIdx - limit;
  const sameTypePosts = posts.filter((post) => post.postType === postType);
  const curPost = sameTypePosts.slice(firstPostIdx, lastPostIdx);

  const paginate = (pageNum) => {
    setCurpage(pageNum);
  };

  return (
    <div>
      <ul>
        {curPost.length === 0 ? (
          <h1 style={{ color: "red" }}>No post Yet</h1>
        ) : (
          curPost.map((post) => {
            return <li key={post._id}>{post.title}</li>;
            //here url a tag
          })
        )}
      </ul>
      <PageNumbers
        limit={limit}
        totalPosts={sameTypePosts.length}
        paginate={paginate}
      />
    </div>
  );
}
