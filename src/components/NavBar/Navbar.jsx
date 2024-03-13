import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend';

const Navbar = (props) => {
  let state = props.sidebar;

  let friends = state.friends.map((friend) => (
    <Friend name={friend.name} key={friend.id} />
  ));
  return (
    <div>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? s.activeNavItem : s.navItem
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              isActive ? s.activeNavItem : s.navItem
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? s.activeNavItem : s.navItem
            }
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              isActive ? s.activeNavItem : s.navItem
            }
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? s.activeNavItem : s.navItem
            }
          >
            Users
          </NavLink>
        </div>
        <div className={s.friendsBlock}>
          <div className={s.friendsLabel}>Friends</div>
          <div className={s.friends}>{friends}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
