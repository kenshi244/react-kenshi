import React from "react";
import style from "./styles/Post.module.css";

const Post = props => {
  return (
    <div className={`${style.Post} row d-flex align-items-center justify-content-center my-3 px-0 py-4`}>
        <div className={`${style.Post_avatar} col-2 p-0`}></div>
        <p className={`${style.Post_text} col-10 m-0 p-0`}>{props.postText}</p>
    </div>
  );
};

export default Post;
