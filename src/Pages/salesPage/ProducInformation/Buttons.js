import React from "react";
/*LIBRERIA ANTD ******************************************************* */
import { Button } from "antd";
/* ******************************************************************** */
/*REACT ROUTER******************************************************* */
import { useNavigate} from 'react-router-dom'
/* ******************************************************************** */
import { setAddCard } from "../../../Store/addCard";
import { useSelector, useDispatch } from "react-redux";


const BuyNAddButtons = () => {
  const disptach= useDispatch()
  const {
    price,
    image,
    name,
    _id,
    description,
  } = useSelector((state)=> state.productSelected.productSelected)
  const navigate = useNavigate();

  const handleBuyButton =  ()=> {
    navigate('/payPage');  
  }
  const handleAddCardBtn=()=> {
    disptach((setAddCard({
      price,
      name,
      image,
      _id,
      description,

    })))
  }

  return (
    <>
    <div className="btns-constainer">
    <Button 
    className="btn-generic"
    type="primary"
    size="large" 
    onClick={()=> {handleBuyButton()}}
    >
      Comprar ahora
    </Button>
    <Button
    className="btn-generic"
    type="primary"
    size="large"
    onClick={()=>{handleAddCardBtn()}}
    >
      Agregar al carrito
    </Button>
      
    </div>
    </> 
    )
};

export {BuyNAddButtons};