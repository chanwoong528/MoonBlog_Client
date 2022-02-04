import React from "react";
import DOMPurify from "dompurify";

export default function SingleComment({ comment }) {
  return (
    <div>
      <h6> {comment.author.name}</h6>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.content),
        }}
      ></div>
    </div>
  );
}
