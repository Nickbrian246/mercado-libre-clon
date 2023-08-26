/*REACT* **************************************************/
import React, { useState } from "react";
/********************************************************** */

/*CSS* **************************************************/
import './styles.css';
/********************************************************** */

/*React Redux* **************************************************/
import { useSelector } from "react-redux";
/********************************************************** */
/*Libreria Ant* **************************************************/
import { Button,  } from 'antd';
/********************************************************** */

import { useNavigate } from "react-router-dom";

import { ModalConfirmBuy } from "../../../modal/modalConfirmBuy/ModalConfirmBuy";




const ProductInformationCheckNConfirm = (props) => {
  const {products} = useSelector((state) => state.howManyProducts)
  const {image, price, title, status, id} = props
  const[ modal, setModal ] = useState(false);
  const navigate = useNavigate();

  // const hanldeClick = () => {
  //   navigate('/');
  // }
    const activeModal = () => {
      setModal(true);
    }
  

  return (
    <>
    <div  className="productInformation-container">
      <div className="productImageAndInformation-container">
        <img className="productImageAndInformation-Image" src={`${image}`} alt="imagen del producto"/>
        <p className="productName">{`${title}`}</p>
        <p className="productName"  >cantidad: {products}</p>


      </div>
      <div className="productPrice-container">
          <div>
          <p className="productName" >Precio</p>
          {status === true &&( <p className="productName">envio</p>)}
          </div>
          <div>
          <p>{`$${price}`}</p>
          {status === true &&( <p className="product-send-free">Gratis</p>)}
          </div>
      </div>
      <div className="price-container">
        <p>Pagas</p>
        <p>{`$${price*products}`}</p>
      </div>

      <div style={{marginTop:'20px', marginLeft:'90px'}}>
      <Button type="primary" size="large" onClick={() =>{activeModal()}} >
      confirmar Compra
      </Button>
      </div>


    </div>
    {modal === true && (
        <ModalConfirmBuy
        title = {title}
        image = {image}
        id = {id}
        />
      )}
    
    </>
  )
};

export{ProductInformationCheckNConfirm}