import React from 'react';
import styles from './UserType.scss';
import global from '../../../styles/global.scss';
import {Link} from 'react-router-dom';

const UserType = () => {
  return (
    <section className={global.section}>
      <h1 className={global.sectionTitle}>co chcesz zrobić?</h1>
      <div className={styles.userType}>
        <div className={styles.userContainer}>
          <h2>Szukam zdjęć do kupienia</h2>
          <Link to='/products'>
            <div className={`${styles.userPhoto} + ${styles.userBuyer}`}>
              <button className={`${global.btn} + ${global.btnPrimary} + ${styles.btnUser}`}>
                Kup
              </button>
            </div>
          </Link>
        </div>
        <div className={styles.userContainer}>
          <h2>Chcę sprzedać moje zdjęcia</h2>
          <Link to='/sad'>
            <div className={`${styles.userPhoto} + ${styles.userSeller}`}>
              <button className={`${global.btn} + ${global.btnPrimary} + ${styles.btnUser}`}>
                Sprzedaj
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserType;
