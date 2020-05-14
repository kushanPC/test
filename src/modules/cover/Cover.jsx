import React from 'react';
import styles from './cover.module.scss';

import Button from '../../components/button/button';

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.backgroundImg} />
      <h1>Test assignment for frontend developer position</h1>
      <p>
        We kindly remind you that your test assignment
        should be submitted as a link to github/bitbucket
        <span className={styles.textForTabletDesktop}>
          repository.
          Please be patient, we consider and respond to every
          application that meets minimum requirements.
          We look forward to your submission. Good luck!
          The photo has to scale in the banner area on the different screens
        </span>
      </p>
      <Button onClick={() => { document.getElementById('register').scrollIntoView({ behavior: 'smooth' }); }}>Sing up now</Button>
    </div>
  );
}

export default Cover;
