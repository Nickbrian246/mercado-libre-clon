import React, { useEffect } from "react";
import './styles.css';

import { Rate } from 'antd'; 



const DescriptionNCost = () => {
const randomSales = Math.floor(Math.random() *1000);
const price = 231;
const priceMonthly = (price / 3);


const handleRate = (value) => {
console.log(value, 'soy valor de ratio, en folder de prodcutInformation, descripcionNcost');
}

  return (
    <>
    <p className="description-salesInfo">Nuevo | {`${randomSales}`} vendidios </p>
    <div className="description-information-container">
      <p>Herramienta De Limpieza De Teclado, Pc, Auriculares Airpod</p>
    </div>
    <div className="description-text-container">
      <p>$243</p>
      
      <p><span style={{fontSize:'20px', fontWeight:'400'}}>en</span> 3x{`$${priceMonthly}`} sin intereses</p>
      <p>ver medios de pago</p> 
    </div>
    <div
    style={{marginBottom:'20px'}}>
      <Rate className="ratio-description" allowHalf defaultValue={2.5}
      onChange={handleRate}
      />
    </div>
    

    </>
  )
};


export {DescriptionNCost};