
import React, { useEffect, useState } from "react";

import './styles.css';

const Warranty = () => {
const  [isActive, setActive]= useState(false);
const ramdomWarranty = Math.floor(Math.random()* 12);

useEffect(() => {
if (ramdomWarranty >1 ) {
  setActive(true)
}
},[])
  return (
    <>
    <div className="warranty-container">
      <div className="warranty-text-container">
        <p>Garantía</p>
      </div>
      <div className="protected-buy-container">
        <p>Compra Protegida con Mercado Pago</p>
        <p>Recibe el producto que eseprabas o te devolvemos el dinero</p>
      </div>

      <div className="seller-warranty-container"> 
        <p>Garantía del vendedor</p>
        <p>Garantía del vendedor :{  `${ramdomWarranty}`} {isActive ?'meses' : 'mes'}</p>
      </div>
      <p style={{color:'blue'}}>Conocer más sobre garantía</p>
    </div>
    </>
  )
};


export {Warranty};