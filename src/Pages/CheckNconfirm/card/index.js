import React from "react";

import './index.css';

import { MdLocationPin } from 'react-icons/md';
import {GrDeliver} from 'react-icons/gr';

import { useSelector } from "react-redux";

const CardCheckNConfirm = () => {
  const {
  accountNumber,
  description,
  src,
  _id,

  } = useSelector((state) => state.cardSelected.cardSelected);

  const {
    price,
  } = useSelector((state) => state.productSelected.productSelected);

  return (
    <>
    <p style={{fontSize:'26px', fontWeight:'bold'}}>Revisa y confirma tu compra</p>
    <p>Detalles de la entrega</p>
      <div className="container">


        <div className="card-container">

          <div className="card-Cp-container">



            <MdLocationPin className="icon" />
            <div className="text-container">
              <p>C.P 86203</p>
              <p>calle guadalupe victoria </p>
            </div>





          </div>
          <p>Editar o elegir otro</p>

        </div>

        <div className="card-container">

          <div className="card-Cp-container">



            <GrDeliver className="icon" />
            <div className="text-container">
              <p>LLega a tu domicilio el Lunes </p>
            </div>





          </div>
          <p>Editar o elegir otro</p>

        </div>

      </div>
      
      <div className="payment-details">
        <p>Detalles del  pago</p>

        <div className="card-container">

          <div className="card-Cp-container">



          <img 
          src={src}
          alt = 'imagen de banco'
          style={{
            width:'50px',
            height:'50px',
            objectFit:'contain',
            marginRight:'10px',
            borderRadius:'100%',
            }} /> 
            <div className="text-container">
              <p>{description} credito ****{accountNumber}</p>
              <p>pagas ${price} </p>
            </div>





          </div>
          <p>Modificar</p>

        </div>




      </div>

    </>
  )
};

export { CardCheckNConfirm };