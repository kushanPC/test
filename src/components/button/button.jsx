import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './button.module.scss';


const Button = memo((props) => {
  const { type, children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={cx(styles.button, { [styles.primary]: type === 'primary' },
        { [styles.secondary]: type === 'secondary' })}
      type="button"
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'button',
  type: 'primary',
  onClick: () => {},
};

export default Button;
