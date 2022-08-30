import React from "react";

import './modalConfirmBuy.css';
import { useSelector } from "react-redux";

const ModalConfirmBuy = () => {
  const {
    name,
    image,
  } = useSelector((state) => state.productSelected.productSelected);
  return (
    <>
    <section className="Modal-container">
      <div className="productModalInformation-container">
        <img src={image} alt="imagen del producto" className="imageStyle"/>
        <p>{name}</p>
      </div>
      <div className="Progress-Section">
        <p>En proceso</p>

        <div className="progress-bar">
          su compra esta casi lista 

        </div>

      </div>

    </section>
    
    </>
  )
};


export {ModalConfirmBuy}