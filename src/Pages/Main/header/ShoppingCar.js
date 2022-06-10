import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri';
import { Link } from "react-router-dom";


const ShoppingCar = ( ) => {


  return (
    <>
    <Link to={'/'}> <RiShoppingCartLine/> </Link>
    </>
  )
};


export {ShoppingCar};