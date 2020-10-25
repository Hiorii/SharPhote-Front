import React,{useContext} from 'react';
import styles from './Alert.special.scss';
import './Alert.special.scss';
import {FaWindowClose} from 'react-icons/all';
import {AlertData} from '../../../data/alertsData';

const Alert = () => {
  const {alert,hideAlert} = useContext(AlertData);

  return (
    <div className={`${styles.alertContainer} + ${alert.show ? styles.alertShow : ' '} + ${alert.type === 'danger' ? styles.alertDanger : ' '}`}>
      <div className={styles.alert}>
        <p>{alert.show && alert.msg}</p>
        <button className={styles.alertClose} onClick={hideAlert}>
          <FaWindowClose/>
        </button>
      </div>
    </div>
  );
};

export default Alert;
