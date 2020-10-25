import React from 'react';
import styles from './Loading.scss';
import loading from '../../../assets/loading2.gif'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h2>loading...</h2>
      <img className={styles.img} src={loading} alt='loading gif' />
    </div>
  );
};

export default Loading;

