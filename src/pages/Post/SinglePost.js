import React, { useEffect, useState, useContext } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

import { PostContext } from "../../context/PostContext";
import { CommentContext } from "../../context/CommentContext";
import customAxios from "../../config/customAxios";

import Comments from "../../components/Comments/Comments";

import "../../styles/Page/Post/SinglePost.scss";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { commentDispatch, comments } = useContext(CommentContext);
  const { postDispatch } = useContext(PostContext);
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await customAxios(`/post/${id}`);
        const data = await res.data;
        if (res.status === 200) {
          commentDispatch({
            type: "LOAD_COMMENTS",
            payload: {
              comments: data.post.comments,
            },
          });
          postDispatch({ type: "INC_VIEW_POST", payload: { postId: id } });
          setPost(data.post);
        }
      } catch (error) {
        console.log("getSinglePost[error]: ", error);
      }
    };
    getSinglePost();
  }, [id, commentDispatch, postDispatch]);
  useEffect(() => {
    const incPostViews = async () => {
      try {
        const res = await customAxios.patch(`/post/views/${id}`);
        const data = await res.data;
        if (res.status === 200) {
          console.log(data.msg);
          //TODO: dispatch singlePost views
        }
      } catch (error) {
        console.log("incPostViews[error]: ", error);
      }
    };
    incPostViews();
  }, [id]);
  if (Object.keys(post).length === 0 && post.constructor === Object) {
    return <h1>404 no post found</h1>;
  } else {
    return (
      <main className="single-post-main">
        <h1 className="single-post-main__title">{post.title}</h1>

        <div
          className="single-post-main__body"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
        ></div>

        <Comments
          postId={id}
          comments={comments}
          editorHeight="10vh"
          containerHeight="10vh"
        />
      </main>
    );
  }
}
