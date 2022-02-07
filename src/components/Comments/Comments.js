import React, { useState, useContext } from "react";
import Editor from "../Editor/Editor";
import SingleComment from "./SingleComment";
import customAxios from "../../config/customAxios";

import { AuthContext } from "../../context/AuthContext";
import { CommentContext } from "../../context/CommentContext";

import "../../styles/Components/Comments.scss";

export default function Comments({ postId, comments }) {
  const [commentBody, setCommentBody] = useState("");
  const { isLoggedIn, user } = useContext(AuthContext);
  const { commentDispatch } = useContext(CommentContext);
  const onChangeCommentBody = (value) => {
    setCommentBody(value);
  };
  const onSubmitComment = async (e) => {
    e.preventDefault();
    if (commentBody.length > 150) {
      return alert("Comments Too Long");
    }
    if (commentBody.length < 1) {
      return alert("Please enter content for comment. ");
    }
    try {
      const res = await customAxios.post(`/comment/${postId}`, {
        commentBody,
      });
      const data = await res.data;

      if (res.status === 200) {
        const newComment = {
          ...data.comment,
          author: { _id: user.id, ...user },
        };
        commentDispatch({
          type: "ADD_COMMENT",
          payload: { comment: newComment },
        });
        setCommentBody("");
      }
    } catch (error) {
      console.log(error.response.data);
      alert("Unable to create Comment");
    }
  };
  return (
    <div className="comments-main">
      <div className="comments-main__comments">
        <h4 className="comments-main__title">
          {comments.length !== 0 ? "Comments" : "Log In to Comment"}
        </h4>

        <form
          className="comments-main__form"
          onSubmit={onSubmitComment}
          onClick={() => {
            if (!isLoggedIn) {
              alert("Please Login to Comment on Post");
            }
          }}
        >
          <Editor
            value={commentBody}
            onChange={onChangeCommentBody}
            editorHeight="20vh"
            containerHeight="30vh"
            readOnly={!isLoggedIn}
          />
          <button
            className="comments-main__form__btn"
            type="submit"
            disabled={!isLoggedIn}
          >
            Submit Comment
          </button>
        </form>
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
}
