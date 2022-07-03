import React from "react";

import { cardList } from "./cardList";
import { Card } from "./Card";
import './index.css';


const PromotionCards = () => {

  return (
    <>
    <div className="cards-container" >
      <div>
        <p className="card-title-container">
          Consigue los mejores beneficios en Mercado Libre y Mercado Pago
          </p>
      </div>
      <div className="card-list-container">
        {cardList.map((list) => (
          <Card list= {list} key= {list.description}/>
        ))}

      </div>
    </div>
    
    </>
  )
};


export {PromotionCards};
