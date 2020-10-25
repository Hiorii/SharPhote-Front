import React from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../data/userData';
import {CardData} from '../../../data/cartData';
import PropTypes from 'prop-types';
import styles from '../Login/Login/Login.scss'

const LoginLink = () => {
  const {user, userLogout} = React.useContext(UserContext);
  const {clearCart} = React.useContext(CardData);

  if(user.token) {
    return (
      <button
        className={styles.loginBtn}
        onClick={()=>{
          userLogout();
          clearCart();
        }}
      >
        wyloguj
      </button>
    );
  }
  return (
    <Link to='/login'>zaloguj</Link>
  );
};

LoginLink.propTypes = {

};

export default LoginLink;

