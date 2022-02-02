import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import customAxios from "../../config/customAxios";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const getSinglePost = async () => {
      const res = await customAxios(`/post/${id}`);
      const data = await res.data;
      if (res.status === 200) {
        setPost(data.post);
      } else {
        //TODO: Error handling
      }
    };
    getSinglePost();
  }, [id]);
  console.log(post);
  if (Object.keys(post).length === 0 && post.constructor === Object) {
    return <h1>404 no post found</h1>;
  } else {
    return (
      <main>
        <h1>SinglePost: {post.title}</h1>
        <div>
          <p>{post.body}</p>
        </div>
      </main>
    );
  }
}
