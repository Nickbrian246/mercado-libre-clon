import React from "react";

import {BsCreditCard2Back} from 'react-icons/bs';

import './styles.css';

/* Components ************************************* */
import { ListItemsPayment } from "./paymentMonthly";
import { CreditCardList } from "./creditCard/index";
import { DebitCardList } from "./debitCard";
import { CashList } from "./cash";


/****************************************************** */
const PaymentMethods = () => {

  return (
    <>
    <div className=" paymentMethods-container">

      <p className="title">Medios de pago</p>

      <div className="payment-card-green">
        <span className="icon-container">
        <BsCreditCard2Back className="icon"/>
        </span>
      <div> <p className="text">¡Paga hasta 3 meses sin interés!</p></div>
      </div>

      <p className="title-bank-information"> Hasta 12 mensualidades sin tarjeta</p>
      <ListItemsPayment/>
      <p className="title-bank-information"> Tarjetas de credito</p>
      <CreditCardList/>
      <p className="title-bank-information">Tarjetas de debito</p>
      <DebitCardList/>
      <p className="title-bank-information">Efectivo</p>
      <CashList/>
      <p style={{ color:'blue', marginTop:'24px'}}>Conoce otros medios de pago</p>

    </div>
    </>
  )
};

export {PaymentMethods};