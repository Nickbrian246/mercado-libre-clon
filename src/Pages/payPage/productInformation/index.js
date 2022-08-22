/*REACT* **************************************************/
import React from "react";
/********************************************************** */

/*CSS* **************************************************/
import './styles.css';
/********************************************************** */

/*React Icons* **************************************************/
import {AiFillCreditCard} from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md';
/********************************************************** */
/*React Redux* **************************************************/
import { useSelector } from "react-redux";
/********************************************************** */




const ProductInformation= () => {
  const {
    image,
    price,
    name,
    status,
  }= useSelector((state)=> state.productSelected.productSelected);

  return (
    <>
    <div  className="productInformation-container">
      <div className="productImageAndInformation-container">
        <img className="productImageAndInformation-Image" src={`${image}`} alt="imagen del producto"/>
        <p className="productName">{`${name}`}</p>
        <p className="productName"  >cantidad: 1</p>


      </div>
      <div className="productPrice-container">
          <div>
          <p className="productName" >Producto</p>
          {status === true &&( <p className="productName">envio</p>)}
          </div>
          <div>
          <p>{`$${price}`}</p>
          {status === true &&( <p className="product-send-free">Gratis</p>)}
          </div>
      </div>
      <div className="price-container">
        <p>Pagas</p>
        <p>{`$${price}`}</p>
      </div>

      {status === true  &&(
        <div className="coupon-container">
        <div className="text-container">
        <AiFillCreditCard/>
          <p>
            Ingresa un cupon de descuento
          </p>
        </div>
        <MdKeyboardArrowDown className="icon-arrow"/>

      </div>
      )}


    </div>
    
    </>
  )
};

export{ProductInformation}