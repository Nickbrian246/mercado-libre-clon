import React from "react";
import {IoIosArrowUp} from 'react-icons/io';
const Stock = ( ) => {
const randomDisponibility= Math.floor(Math.random() * 100);

  return (
    <>
    <div className="stock-container">
      <p>
        Stock disponible
      </p>

      <div className="StockText-container">
      <p>
        cantidad:
      </p>

      <p>
        1 Unidad
      </p>
        <span className="icon-container-stock">
          <IoIosArrowUp />
        </span>
      <p className="stockContainer-availability">{`(${randomDisponibility} disponibles)`}</p>
      </div>
    </div>
    </>
  )
};


export {Stock};