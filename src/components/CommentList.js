import React from "react";
import RenderComment from './sections/RenderComment';

export default function CommentList(props) {
  return (
    <div>
      <h5>
        <span>{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div>
          Be the first to comment
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <RenderComment key={index} comment={comment} />
      ))}
    </div>
  );
}
