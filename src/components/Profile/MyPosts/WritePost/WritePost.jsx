import React from "react";
import style from "./styles/WritePost.module.css";

const WritePost = props => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h4 className={`${style.h4} mt-2`}>Написать пост</h4>
      <textarea
        name="writePost"
        id="writePost"
        placeholder={props.placeholderText}
        className={`${style.textarea} form-control`}
      ></textarea>
      <button className={`${style.button} btn my-3`}>Опубликовать</button>
    </div>
  );
};

export default WritePost;