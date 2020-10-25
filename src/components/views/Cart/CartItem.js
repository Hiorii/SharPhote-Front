import React, {useContext} from 'react';
import {FaAngleUp, FaAngleDown} from 'react-icons/all';
import {CardData} from '../../../data/cartData';
import styles from './Cart.scss';
import global from '../../../styles/global.scss'

const CartItem = ({id,image,title,price,amount}) => {
  const {removeItem, increaseAmount, decreaseAmount} = useContext(CardData);

  return (
    <article className={styles.cartItem}>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{price} zł</h5>
        <button
          type='button'
          className={`${styles.cartBtn} + ${styles.removeBtn}`}
          onClick={()=> removeItem(id)}
        >
          usuń
        </button>
      </div>
      <div>
        <button
          type='button'
          className={`${styles.cartBtn} + ${styles.amountBtn}`}
          onClick={()=>increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <p className={styles.itemAmount}>{amount}</p>
        <button
          type='button'
          className={`${styles.cartBtn} + ${styles.amountBtn}`}
          onClick={()=> decreaseAmount(id)}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
