import React,{useContext} from 'react';
import {FaAngleDoubleUp} from 'react-icons/all';
import {ScrollData} from '../../../data/scrollData';
import styles from './ScrollButton.scss';

const ScrollButon = () => {
  const { height } = useContext(ScrollData);
  const scrollBackTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <button
        className={height > 100 ? `${styles.scrollBtn} ${styles.showScrollBtn}` : styles.scrollBtn}
        onClick={scrollBackTop}
      >
        <FaAngleDoubleUp></FaAngleDoubleUp>
      </button>
    </>
  );
};

export default ScrollButon;
