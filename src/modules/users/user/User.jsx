import React from 'react';
import PropTypes from 'prop-types';
import styles from './user.module.scss';


import { ReactComponent as UserPhotoDefault } from '../../../assets/images/photo-cover.svg';

function User(props) {
  const {
    photo, name, position, email, phone,
  } = props;
  return (
    <div className={styles.user}>
      {photo ? <img src={photo} alt="user" className={styles.photo} />
        : <UserPhotoDefault className={styles.photo} />}
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.phone}>{phone}</p>
    </div>
  );
}

User.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

User.defaultProps = {
  photo: null,
  name: 'имя',
  position: 'должность не указана',
  email: 'email не указан',
  phone: 'телефон не указан',
};

export default User;
