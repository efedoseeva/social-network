import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userDefault from '../../assets/images/userDefault.png';

class Users extends React.Component {
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => this.onPageChanged(p)}
                className={this.props.currentPage === p && styles.selectedPage}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div className={styles.userPhoto}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userDefault
                  }
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location?.country}</div>
                <div>{user.location?.city}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
