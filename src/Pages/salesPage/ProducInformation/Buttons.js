import React from "react";
/*LIBRERIA ANTD ******************************************************* */
import { Button } from "antd";
/* ******************************************************************** */
/*REACT ROUTER******************************************************* */
import { Link} from 'react-router-dom'
/* ******************************************************************** */
import { setAddCard } from "../../../Store/addCard";
import { useSelector, useDispatch } from "react-redux";


const BuyNAddButtons = (props) => {
  const {id} = props
  const disptach= useDispatch()
  // const {
  //   price,
  //   image,
  //   name,
  //   _id,
  //   description,
  // } = useSelector((state)=> state.productSelected.productSelected)
  // const navigate = useNavigate();

  // const handleBuyButton =  ()=> {
  //   navigate('/payPage');  
  // }
  const handleAddCardBtn=()=> {
    disptach((setAddCard({
      id
    })))
  }

  return (
    <>
    <div className="btns-constainer">
    <Button 
    className="btn-generic"
    type="primary"
    size="large" 
    >
    <Link   to={`/payPage/${id}`}>Comprar ahora</Link> 
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