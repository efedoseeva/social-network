import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from '../MyPosts/MyPosts';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-5.jpg" />
      </div>
      <div className={s.profile}>
        <div className={s.profilePhoto}>
          <img src="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp" />
        </div>
        <div className={s.profileDesc}>Hi, my name is Colin.</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
