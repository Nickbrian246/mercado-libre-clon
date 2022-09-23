import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri';
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { ModalToShopping } from "../../../modal/modalToShoppingCart";
import { useState } from "react";


const ShoppingCar = ( ) => {
  const [modalState, setModalState] = useState(true);
  const cartproduct= useSelector((state)=> state.addCard.addCard);
  const length= cartproduct.length;

  const handleModalState = () => {
    setModalState(!modalState);
    console.log(modalState,'spy modelae');
  }


  return (
    <>
    <RiShoppingCartLine style={{fontSize:'18px'}} onClick={()=> { handleModalState()}}/>
    <div style={{position:'absolute',top:'-11px', right:'11px'}}>
      {length>=1 && (
        <Badge size="small" style={{fontSize:'13px'}}
        count={length}/>
      )}
    </div>
    {modalState=== true && (
      <ModalToShopping/>
    )}

    </>
  )
};


export {ShoppingCar};