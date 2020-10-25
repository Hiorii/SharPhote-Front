import React from 'react';
import styles from './Hero.scss';

const Hero = ({children}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <h1>imagine, create, share</h1>
        <p>capture the moment</p>
        {children}
      </div>
    </div>
  )
}

export default Hero;
