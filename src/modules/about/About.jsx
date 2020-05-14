import React from 'react';
import Button from '../../components/button/button';

import styles from './about.module.scss';

import { ReactComponent as ManSvg } from '../../assets/images/man.svg';

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Let&apos;s get acquainted</h2>
      <div className={styles.content}>
        <ManSvg alt="qwewq" className={styles.img} />
        <div className={styles.descriptionAndButton}>
          <div className={styles.descriptions}>
            <h2>I am cool frontend developer</h2>
            <p>
              We  will evaluate how clean your approach to writing CSS and Javascript code is.
              You can use any CSS and Javascript 3rd party libraries without any restriction.
            </p>
            <p>
              If 3rd party css/javascript libraries are added to the
              project via bower/npm/yarn you will get bonus points.
              If you use any task runner (gulp/webpack) you will get bonus
              points as well. Slice service directory page PSD mockup into HTML5/CSS3.
            </p>
          </div>
          <Button
            onClick={() => { document.getElementById('register').scrollIntoView({ behavior: 'smooth' }); }}
            type="secondary"
          >
            Sing up now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
