import React, { useContext } from "react";
import DOMPurify from "dompurify";
import { AuthContext } from "../../context/AuthContext";
import { CommentContext } from "../../context/CommentContext";

import "../../styles/Components/SingleComment.scss";
import customAxios from "../../config/customAxios";

export default function SingleComment({ comment }) {
  const { isLoggedIn, user } = useContext(AuthContext);
  const { commentDispatch } = useContext(CommentContext);

  const onClickDeleteComment = async () => {
    try {
      const res = await customAxios.delete(
        `/comment/${comment.postId}/${comment._id}`
      );
      const data = await res.data;
      console.log(data);
      commentDispatch({ type: "DELTE_COMMENT", payload: { comment } });
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div
      key={comment._id}
      className={
        isLoggedIn
          ? comment.author._id === user.id
            ? "comment__container__self"
            : "comment__container__other"
          : "comment__container__other"
      }
    >
      <div className="comment__container__info">
        <h6 className="comment__container__info__author">
          {comment.author.name}
        </h6>
        <h6 className="comment__container__info__date">
          {comment.create_at.slice(0, 10)}
        </h6>
        {isLoggedIn && comment.author._id === user.id && (
          <button
            className="comment__container__info__btn"
            onClick={onClickDeleteComment}
          >
            X
          </button>
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.content),
        }}
      ></div>
    </div>
  );
}
