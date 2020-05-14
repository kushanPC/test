import React, { useState } from 'react';

import cx from 'classnames';

import styles from './header.module.scss';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);

  const onClick = () => {
    setMenuStatus(false);
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.header}>
      <LogoIcon onClick={onClick} alt="logo" className={styles.logo} />
      <div
        className={cx(styles.clickToHide, { [styles.hide]: !menuStatus })}
        onClick={() => { setMenuStatus(false); }}
      />
      <div
        className={cx(styles.menuWrap, { [styles.hide]: !menuStatus })}
      >

        <ul className={styles.menu}>
          <li className={cx({ [styles.hide]: !menuStatus })}>
            <LogoIcon onClick={onClick} alt="logo" className={cx(styles.logo, { [styles.hide]: !menuStatus })} />
          </li>
          <hr />
          <li><span onClick={onClick} className={styles.menuItem}>About me</span></li>
          <li><span onClick={onClick} className={styles.menuItem}>Relationships</span></li>
          <li><span onClick={onClick} className={styles.menuItem}>Requirements</span></li>
          <li><span onClick={onClick} className={styles.menuItem}>Users</span></li>
          <li><span onClick={onClick} className={styles.menuItem}>Sign Up</span></li>
        </ul>
      </div>
      <MenuIcon className={styles.burger} onClick={() => { setMenuStatus(true); }} />

    </div>
  );
}

export default Header;
