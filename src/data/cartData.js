import  React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

export const CardData  = React.createContext();

const CardProvider = ({children}) => {
  const [cart, setCart] = useState(getCartFromLocalStorage);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(()=> {
    localStorage.setItem('cart',JSON.stringify(cart));
    let newCartItems = cart.reduce((total,cartItem)=>{
      return (total += cartItem.amount);
    },0);
    setCartItems(newCartItems);
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  },[cart]);

  const removeItem = id => {
    let newCart = [...cart].filter(item=>item.id !== id);
    setCart(newCart);
  };
  const increaseAmount = (id) => {
    const newCart = [...cart].map(item => {
      return item.id === id ? {...item,amount: item.amount + 1} : {...item};
    });
    setCart(newCart);
  };
  const decreaseAmount = id => {
    const newCart = [...cart].map(item=> {
      return item.id === id ? {...item,amount: item.amount -1} : {...item};
    });
    setCart(newCart);
  };
  const addToCart = product => {
    const {id, image, title, price} = product;
    const item = [...cart].find(item => item.id === id);
    if(item){
      increaseAmount(id);
      return;
    }
    else {
      const newItem = {id, image, title, price, amount:1};
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardData.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}>
      {children}
    </CardData.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CardProvider;

