import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings.scss';
import App from './App';
import ProductsProvider from './data/productsData';
import CardProvider from './data/cartData';
import UserProvider from './data/userData';
import AlertsProvider from './data/alertsData';
import ScrollProvider from './data/scrollData';

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <CardProvider>
        <AlertsProvider >
          <ScrollProvider>
            <App />
          </ScrollProvider>
        </AlertsProvider >
      </CardProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById('root'));
