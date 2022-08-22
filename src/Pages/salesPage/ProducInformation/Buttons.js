import React from "react";
/*LIBRERIA ANTD ******************************************************* */
import { Button } from "antd";
/* ******************************************************************** */
/*REACT ROUTER******************************************************* */
import { useNavigate} from 'react-router-dom'
/* ******************************************************************** */


const BuyNAddButtons = () => {
  const navigate = useNavigate();

  const handleBuyButton =  ()=> {
    navigate('/payPage');  
  }

  return (
    <>
    <div className="btns-constainer">
    <Button className="btn-generic" type="primary" size="large" onClick={()=> {handleBuyButton()}}>Comprar ahora</Button>
    <Button className="btn-generic" type="primary" size="large">Agregar al carrito</Button>
      
    </div>
    </> 
    )
};

export {BuyNAddButtons};