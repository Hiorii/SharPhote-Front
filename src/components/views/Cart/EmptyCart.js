import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Cart.scss';
import global from '../../../styles/global.scss';
import emptyImg from '../../../assets/empty_cart.png';

const EmptyCart = () => {
  return (
    <section className={`${styles.emptyCart} + ${global.section}`}>
      <h2>twój koszyk jest pusty...</h2>
      <img src={emptyImg} alt='Go shopping image' />
      <Link to='/products' className={global.btnPrimary}>
        Znajdź zdjęcie dla siebie!
      </Link>
    </section>
  );
};

export default EmptyCart;

