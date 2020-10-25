import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CardData} from '../../../../data/cartData';
import styles from './CartLink.scss';

const CartLink = () => {
  const {cartItems} = useContext((CardData));

  return (
    <div className={styles.cartLinkContainer}>
      <Link to='/cart'>cart</Link>
      <span className={styles.cartLinkTotal}>{cartItems}</span>
    </div>
  );
};

export default CartLink;
