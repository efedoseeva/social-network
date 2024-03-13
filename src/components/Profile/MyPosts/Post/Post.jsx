import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://img.freepik.com/premium-vector/young-man-avatar-smiling-happy-guy-portrait_81894-6399.jpg"></img>
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
      <div>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
