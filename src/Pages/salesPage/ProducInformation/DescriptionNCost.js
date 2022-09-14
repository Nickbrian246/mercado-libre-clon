/*REACT* *****************************************************/
import React, { useEffect } from "react";
/************************************************************* */

/*CSS***************************************************** */
import './styles.css';
/************************************************************* */

/*  LIBRERIA ANTD***************************************************** */
import { Rate } from 'antd'; 
/************************************************************* */

//React Redux *****************************************//
import  {useSelector} from 'react-redux'
//*****************************************************//

const DescriptionNCost = () => {
  const {
    name,
    price,
    status,
  } = useSelector((state)=> state.productSelected.productSelected);

const randomSales = Math.floor(Math.random() *1000);
const priceMonthlyCalculus = (price / 3);
const priceMonthly= priceMonthlyCalculus.toFixed(2);// trunca a 2 decimales

const handleRate = (value) => {
console.log(value, 'soy valor de ratio, en folder de prodcutInformation, descripcionNcost');
}

  return (
    <>
    <p className="description-salesInfo">Nuevo | {`${randomSales}`} vendidios </p>
    <div className="description-information-container">
      <p>{`${name}`}</p>
    </div>
    <div className="description-text-container">
      <p>{`$${price}`}</p>
      
        {status === true 
        && (
        <p
          className="months-without"
        >
          <span
            style={{fontSize:'20px', fontWeight:'400'}}
            >en
          </span>
          3x
          {`$${priceMonthly}`}sin intereses
        </p>
          )}
      <p className="payment-method">ver medios de pago</p> 
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