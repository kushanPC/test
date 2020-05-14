import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './fail.module.scss';
import Button from '../../button/button';

const Fail = memo((props) => {
  const {
    title, description, onClick,
  } = props;
  return (
    <div className={styles.fail}>
      <div className={styles.window}>
        <h5 className={styles.title}>{title}</h5>
        <hr />
        <p className={styles.description}>{description}</p>
        <hr />
        <Button onClick={onClick}>ok</Button>
      </div>
    </div>
  );
});

Fail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Fail.defaultProps = {
  title: 'erroe',
  description: 'some error',
  onClick: () => {},
};

export default Fail;
