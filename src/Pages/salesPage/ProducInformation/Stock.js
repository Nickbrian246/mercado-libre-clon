import React, { useState } from "react";
import {IoIosArrowUp} from 'react-icons/io';
import { SelectQuantityCard } from "./selectQuantityCard/SelectQuantityCard";
import { quantityList } from "./selectQuantityCard/quantituyList";
const Stock = ( ) => {
  const [isModalToSelectQuantity, setIsModalToSelectQuantity] = useState(false);
  const [quantitySelected, setQuantitySelected] = useState(false)
  const [position, setPosition] = useState(``)
  const [quantity, setQuantity] = useState(`1 unidad`)

  const randomDisponibility= Math.floor(Math.random() * 100);
  const  handleOpenModalToSelectQuantity =() =>{
  setIsModalToSelectQuantity(true)
  }

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

      <button onClick={handleOpenModalToSelectQuantity} style={{
        background:"none",
        border:"none",
        padding:"0",
        cursor:"pointer",
        paddingBottom:"15px",
        position:"relative"
      }} >
        {quantity}
        <span className="icon-container-stock">
          <IoIosArrowUp />
        </span>
      </button>
      <div style={{
        position:"absolute",  
        width:"200px",
        height:"300px",
        bottom:"-0px",
        zIndex:'1',
        background:"#ffff",
        display:"flex",
        flexDirection:"column",
        borderRadius:"5px",
        border:'1px solid #e9e9e9'
        }}>
          {quantityList.map((item) => (

              <SelectQuantityCard
              setQuantitySelected = {setQuantitySelected}
              quantitySelected = {quantitySelected}
              title = {item.title} 
              unit = {item.unit}
              position = {position}
              setPosition = {setPosition}
              id = {item.id} 
              setQuantity = {setQuantity}
              />
          ))}

      </div>
      <p className="stockContainer-availability">{`(${randomDisponibility} disponibles)`}</p>
      </div>
    </div>
    </>
  )
};


export {Stock};