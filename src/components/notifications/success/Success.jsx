import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './success.module.scss';
import Button from '../../button/button';

const Success = memo((props) => {
  const {
    onClick,
  } = props;
  return (
    <div className={styles.success}>
      <div className={styles.window}>
        <div className={styles.head}>
          <h5 className={styles.title}>Congratulations</h5>
          <button
            type="button"
            aria-label="close a window"
            className={styles.cross}
            onClick={() => { onClick(false); }}
          />
        </div>

        <hr />
        <p className={styles.description}>You have successfully passed the registration</p>
        <hr />
        <div className={styles.buttonWrap}>
          <Button className={styles.buttonGreat} onClick={() => { onClick(false); }}>Great</Button>
        </div>

      </div>
    </div>
  );
});

Success.propTypes = {
  onClick: PropTypes.func,
};

Success.defaultProps = {
  onClick: () => {},
};

export default Success;
