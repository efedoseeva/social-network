import React from 'react';
import s from './Navbar.module.css';

const Friend = (props) => {
  return (
    <div className={s.friendsItem}>
      <img
        src="https://img.freepik.com/premium-vector/young-man-avatar-smiling-happy-guy-portrait_81894-6399.jpg"
        alt="friend"
      ></img>
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
