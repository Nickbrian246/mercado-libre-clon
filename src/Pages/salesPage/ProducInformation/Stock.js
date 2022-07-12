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

      <div className="text-container">
      <p>
        cantidad:
      </p>

      <p>
        1 cantidad
      </p>
        <span className="icon-container-stock">
          <IoIosArrowUp />
        </span>
      <p>{`(${randomDisponibility} disponibles)`}</p>
      </div>
    </div>
    </>
  )
};


export {Stock};