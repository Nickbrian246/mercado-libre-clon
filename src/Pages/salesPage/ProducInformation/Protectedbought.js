import React from "react";

import './styles.css';

import{ BiCheckShield} from 'react-icons/bi';
import {IoIosTrophy} from 'react-icons/io';

const ProtectedBought = () => {


  return (
    <>
    <div className="protectedBought-container">

      <div className="text-container">
        <div>
          <BiCheckShield className="icon-shield-container"/>
        </div>
        <p> <span className="blue">Compra Protegida </span>recibe el producto que esperabas o te devolvemos tu dinero.</p>
      </div>
      <div className="text-container">
        <div>
          <IoIosTrophy className="icon-trophy-container"/>
        </div>
        <p> <span  className="blue">Mercado Puntos </span>.Sumas 29 puntos.</p>
      </div>


    </div>
    </>
  )
};

export {ProtectedBought};