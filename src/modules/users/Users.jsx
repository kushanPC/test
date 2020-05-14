import React from 'react';

import PropTypes from 'prop-types';

import styles from './users.module.scss';
import Button from '../../components/button/button';
import User from './user/User';


function Users(props) {
  const { users, addUsersThunk, url } = props;
  return (
    <div className={styles.users}>
      <h2 className={styles.title}>Our cheerful users</h2>
      <p className={styles.description}>Attention! Sorting users by registration date</p>
      <div className={styles.usersBoard}>

        {users.map((user) => (
          <User
            key={user.id}
            photo={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phone={user.phone}
          />
        ))}

      </div>
      {props.showButton && <Button onClick={() => { addUsersThunk(url); }}>Show more</Button>}
    </div>
  );
}


Users.propTypes = {
  users: PropTypes.array,
  addUsersThunk: PropTypes.func,
  url: PropTypes.string || null,
};

Users.defaultProps = {
  addUsersThunk: () => {},
  users: [],
  url: null,
};

export default Users;
