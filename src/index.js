import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import mainInformationReducer from '../src/Store/mainReducer';
import salesInformationReducer from '../src/Store/salesPage';
import BankCardsSlice from './Store/bankCards';
import productSelected from './Store/productSelected';
import cardSelected from './Store/cardSelected';
import imageSelected from './Store/imageSelected';
import addCard from './Store/addCard';
import howManyProducts from './Store/howManyProducts'
import relativePrice from './Store/relativePrices'
import productsFromCart from './Store/productsFromCart';


const store = configureStore({
  reducer:{
    fakeProductsGroup: mainInformationReducer,
    salesCommentsInformation: salesInformationReducer,
    BankCardsSlice: BankCardsSlice,
    productSelected: productSelected,
    cardSelected: cardSelected,
    imageSelected:imageSelected,
    addCard:addCard,
    howManyProducts:howManyProducts,
    relativePrice:relativePrice,
    productsFromCart:productsFromCart,

  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
