import React, { useContext } from "react";
import DOMPurify from "dompurify";
import { AuthContext } from "../../context/AuthContext";

import "../../styles/Components/SingleComment.scss";

export default function SingleComment({ comment }) {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div
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
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.content),
        }}
      ></div>
    </div>
  );
}
