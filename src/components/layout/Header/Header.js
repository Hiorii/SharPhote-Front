import React from 'react';
import styles from './Header.scss';
import {Link} from 'react-router-dom';
import logo from '../../../assets/logo2.png'
import CartLink from '../../views/Cart/CartLink/CartLink';
import {UserContext} from '../../../data/userData';
import LoginLink from '../../views/Login/LoginLink';

export default function Header() {
  const {user} = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='SharPhoto logo' className={styles.logo} />
      </div>
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>Strona Główna</Link>
            </li>
            <li>
              <Link to='/about'>O nas</Link>
            </li>
            <li>
              <Link to='/usertype'>Zdjęcia</Link>
            </li>
            {user.token && <li>
              <Link to='/checkout'>płatność</Link>
            </li>}
          </div>
          <div>
            <CartLink />
            <LoginLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
