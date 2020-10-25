import React,{useContext} from 'react';
import styles from './Cart.scss';
import global from '../../../styles/global.scss';
import {CardData} from '../../../data/cartData';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import CartLink from './CartLink/CartLink';
import {UserContext} from '../../../data/userData';

const Cart = () => {

  const {cart, total} = useContext(CardData);
  const {user} = useContext(UserContext);

  if(cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className={`${global.section} + ${styles.cartItems}`}>
      <h2>twój koszyk</h2>
      {cart.map((product)=> {
        return <CartItem key={product.id} {...product} />;
      })}
      <h2>Suma: {total} zł</h2>
      <div className={styles.cartContinue}>
        <Link
          to='/products'
          className={`${global.btn} + ${global.btnPrimary} + ${global.btnBlock}`}
        >
          Kontunuuj zakupy
        </Link>
      </div>
      {user.token ? (
        <Link
          to='/checkout'
          className={`${global.btn} + ${global.btnPrimary} + ${global.btnBlock}`}
        >
          przejdź do płatności
        </Link>
      ) : (
        <Link
          to='/checkout'
          className={`${global.btn} + ${global.btnPrimary} + ${global.btnBlock}`}
        >
          zaloguj
        </Link>
      )};
    </section>
  );
};

export default Cart;
