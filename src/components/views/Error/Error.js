import React from 'react';
import styles from './Error.scss';
import globalStyles from '../../../styles/global.scss'
import sadFace from '../../../assets/errorFace.png'
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <div className={styles.imgContainer}>
          <img src={sadFace} className={styles.img}/>
        </div>
        <h1>Oops! Coś chyba poszło nie tak</h1>
        <Link to='/' className={`${globalStyles.btn} ${globalStyles.btnPrimary}`} >
          strona główna
        </Link>
      </div>
    </section>
  )
}
