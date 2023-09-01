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




const ProductInformation = (props) => {
  const {products} = useSelector((state) => state.howManyProducts)
  
  const {
    image,
    price,
    title,
    status,
    isCartItems,
    total,
    quantityOfProducts,
    listOfCartProducts
  }= props
  let totalWithShippingCost = (total + 65)
  return (
    <>
    <div id="top"  className="productInformation-container">
      {isCartItems 
      ? <div className="productImageAndInformationFromShoppingCart-container">
          <p>Resumen de la compra </p>
        </div>
      : <div className="productImageAndInformation-container">
          <img className="productImageAndInformation-Image" src={`${image}`} alt="imagen del producto"/>
          <p className="productName">{`${title}`}</p>
          <p className="productName"  >cantidad: {quantityOfProducts }</p>
        </div>
      }
      <div className="productPrice-container">
          <div>
          <p className="productName" >{isCartItems ? `Productos (${quantityOfProducts})`:`Producto ${quantityOfProducts}` }</p>
          {status === true &&( <p className="productName">envio</p>)}
          </div>
          <div>
          <p>{`$${isCartItems ? total: price}`}</p>
          {status === true &&( <p className="product-send-free">Gratis</p>)}
          </div>
      </div>
      <div className="price-container">
        <p>Pagas</p>
        <p>{`$${ isCartItems ? (status ? (total) : totalWithShippingCost.toFixed(2)) :(price * quantityOfProducts).toFixed(2)}`}</p>
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