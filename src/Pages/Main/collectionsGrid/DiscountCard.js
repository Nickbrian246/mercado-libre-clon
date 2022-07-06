import React from "react";

import './descountCard.css';

const DiscountCard = () => {


  return (
    <>
    <div className="discount-card">

      <div className="discount-img-container">
        <img
        className="discount-img-container"
        src="https://http2.mlstatic.com/D_NQ_996413-MLA49047950216_022022-OO.webp"
        alt=" imagen promocional"/>
      </div>
      
      <div className="discount-text-container">
        <p>
          Descubre
        </p>
        <p>
          DESCUENTOS ÚNICOS
        </p>
      </div>

    </div>
    </>
  )
};

export {DiscountCard };