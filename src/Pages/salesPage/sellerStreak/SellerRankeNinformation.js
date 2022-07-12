import React, { useEffect, useState } from "react";

import './styles.css';
/*Libreria de react icons * */
import {BiMessageAltDetail} from 'react-icons/bi';
import {
  BsFillCheckCircleFill,
  BsStopwatch} from 'react-icons/bs';
import {RiMedalLine} from 'react-icons/ri';
/*Libreria de react icons ************************ */

const SellerRankNInformation = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
const salesInThe60DaysPast =Math.floor(Math.random() * 500);

useEffect(()=>{
  if ((salesInThe60DaysPast<=500) && (salesInThe60DaysPast>=400)) {
    setIsActive5(true);
    console.log('5',salesInThe60DaysPast);
  }
  if ((salesInThe60DaysPast<=399) && (salesInThe60DaysPast>=300)) {
    setIsActive4(true);
    console.log('4',salesInThe60DaysPast);
  }
  if ((salesInThe60DaysPast<=299) && (salesInThe60DaysPast>=200)) {
    setIsActive3(true);
    console.log('3',salesInThe60DaysPast);
  }
  if ((salesInThe60DaysPast<=199) && (salesInThe60DaysPast>=100)) {
    setIsActive2(true);
    console.log('2',salesInThe60DaysPast);
  }
  if ((salesInThe60DaysPast<=99 && (salesInThe60DaysPast>=1) )) {
    setIsActive1(true);
    console.log('1',salesInThe60DaysPast);
  }

},[]);

console.log(salesInThe60DaysPast,'soy sales fuera del efecto');

  return (
    <>
    <div className="sellerInformation-container">
    <p>Información sobre el vendedor</p>

    <div className="icon-leadermarket-container">
      <div>
        <RiMedalLine/>
      </div>
      <div>
        <p>MercadoLider</p>
        <p>¡Es uno de los mejores del sitio!</p>
      </div>
    </div>

    <div className="ranked-container">
      <div className={`ranked-size color-1  ${isActive1 && 'active-1'}`}>

      </div>
      <div className={`ranked-size  color-2 ${isActive2 && 'active-2'}`}>

      </div>
      <div className={`ranked-size  color-3 ${isActive3 && 'active-3'}`}>

      
      </div>
      <div className={`ranked-size  color-4 ${isActive4 && 'active-4'}`}>

      </div>
      <div className={`ranked-size  color-5 ${isActive5 && 'active-5'}`}>

      </div>
      

    </div>

    <div className="information-container">
      <div className="icon-informationSection-container">
        <p>{`${salesInThe60DaysPast}`}</p>

        <p>ventas en los ultimos 60 dias</p>

      </div>

      <div className="attention-container">
        <div>
        <span className="icon-message-container"><BiMessageAltDetail/></span>
        <span  className={`icon-check-container
        ${(isActive1 && 'icon-check-container-active1a') || (isActive2 && 'icon-check-container-active2a') ||
          (isActive3 && 'icon-check-container-active3a') || (isActive4 && 'icon-check-container-active4a') ||
          (isActive5 && 'icon-check-container-active5a')
          }`}><BsFillCheckCircleFill/></span>
        </div>
        {( isActive5 && <p className="attention-text-color">brinda excelente atencion</p>) ||
        ( isActive4 && <p className="attention-text-color">brinda buena atencion</p>) || 
        ( isActive3 && <p className="attention-text-color">brinda atencion regular</p>) || 
        ( isActive2 && <p className="attention-text-color">brinda mala atencion</p>) ||
        ( isActive1 && <p className="attention-text-color">brinda pesima atencion</p>) }
        
      </div>

      <div className="attention-container ">
        <div className="deliver-icon-container">
          <span className="icon-message-container" ><BsStopwatch/></span>
          <span className={
            `icon-check-container2
          ${(isActive1 && 'icon-check-container-active1') || (isActive2 && 'icon-check-container-active2') ||
          (isActive3 && 'icon-check-container-active3') || (isActive4 && 'icon-check-container-active4') ||
          (isActive5 && 'icon-check-container-active5')
          }`}>
            <BsFillCheckCircleFill/>
          </span>
        </div>
        {( isActive5 && <p className="attention-text-color">entrega sus pedidos a tiempo</p>) ||
        ( isActive4 && <p className="attention-text-color">entrega sus pedidos relativamente a tiempo</p>) || 
        ( isActive3 && <p className="attention-text-color">entrega sus pedidos Tarde</p>) || 
        ( isActive2 && <p className="attention-text-color">entrega sus pedidos muy tarde</p>) ||
        ( isActive1 && <p className="attention-text-color">Entrega mas tarde de los normal</p>) }
        
      </div>

    </div>

    </div>
    </>
  )
};

export {SellerRankNInformation};