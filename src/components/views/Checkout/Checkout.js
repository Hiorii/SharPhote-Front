import React from 'react';
import PropTypes from 'prop-types';
import {CardData} from '../../../data/cartData';
import {UserContext} from '../../../data/userData';
import {AlertData} from '../../../data/alertsData';
import {useHistory} from 'react-router-dom';
import EmptyCart from '../Cart/EmptyCart';
import styles from './Checkout.scss';
import global from '../../../styles/global.scss';
import form from '../Login/Login/Login.scss';
import submitOrder from '../../../strapi/submitOrder';
import {CardElement,StripeProvider,Elements,injectStripe} from 'react-stripe-elements';

const Checkout = (props) => {
  const {cart, total, clearCart} = React.useContext(CardData);
  const {user} = React.useContext(UserContext);
  const {showAlert, hideAlert, alert} = React.useContext(AlertData);
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  console.log(cart, total);

  const handleSubmit = async(e) => {
    showAlert({
      msg:'przetwarzanie płatności... Proszę czekać',
    });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch(error => console.log(error));

    const {token} = response;
    if(token){
      setError('');
      const {id} = token;
      let order = await submitOrder({
        name:name,
        total:total,
        items:cart,
        stripeTokenId:id,
        userToken:user.token,
      });
      if(order) {
        showAlert({msg:'twoje zlecenie zostało przyjęte'});
        clearCart();
        history.push('/');
        return;
      }
      else {
        showAlert({
          msg:'Wystąpił nieoczekiwany problem z twoim żądaniem. Spróbuj ponownie',
          type:'danger',
        });
        setTimeout(hideAlert(),3000);
      }
    }else {
      hideAlert();
      setError(response.error.message);
    }
  };
  if(cart.length < 1) return <EmptyCart />;
  return (
    <section className={`${global.section} + ${form.form}`}>
      <h2 className={global.sectionTitle}>zapłać</h2>
      <form className={styles.checkoutForm}>
        <h3>
          suma: <span>{total} zł</span>
        </h3>
        {}
        <div className={form.formControl}>
          <label htmlFor='name'>imię</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.stripeInfo}>
          <label htmlFor='cardElement'>Karta kredytowa lub debetowa</label>
          <p className={styles.stripeInfo}>Test do tej karty: <span>4242 4242 4242 4242</span>
            <br />
            Wpisz 5 cyfr do kodu pocztowego
            <br />
            Wpisz 3 cyfry do CVC
          </p>
        </div>
        <CardElement className={styles.cardElement}></CardElement>

        {error && <p className={form.formEmpty}>{error}</p> }
        {isEmpty
          ?  <p className={form.formEmpty}>proszę wpisać imię</p>
          : <button
            type='submit'
            onClick={handleSubmit}
            className={`${global.btn} + ${global.btnPrimary} + ${global.btnBlock}`}
          >
            potwierdź
          </button>
        }
      </form>
    </section>
  );
};

Checkout.propTypes = {

};

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return <StripeProvider apiKey="pk_test_51HflYaI7qOUQnBw4KS4ZaBIwRurQASTsmrM6KFCGuzpRfqLJZi7DAYyQiGK3NrTu4J5Oyf5QF4or3aOpZjGLHIZW00LDPTr1IE">
    <Elements>
      <CardForm></CardForm>
    </Elements>
  </StripeProvider>;
};

export default StripeWrapper;

