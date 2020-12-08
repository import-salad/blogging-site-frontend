import React from "react";
//import logo from "../logo.svg";

export default function RenderComment(props) {
  const comment = props.comment;

  return (
    <div>
      {/*<img
        width="40"
        height="40"
        src={logo}
        alt={comment.username}
      />*/}
      <b>{comment.username} </b>
      <small>{Date(comment.creationTime).toString()}</small>
      <p>
        {comment.body}
      </p> 
    </div>
  );
}
