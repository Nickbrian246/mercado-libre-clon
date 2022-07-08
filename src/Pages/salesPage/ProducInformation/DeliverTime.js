import React from "react";
import './styles.css';
/* LIBRERIA DE ICONS *************************************** */
import {AiFillCar} from 'react-icons/ai';
import {BsFillLightningFill,BsArrowDownShort} from 'react-icons/bs';
import {RiArrowGoBackFill} from 'react-icons/ri';
/* LIBRERIA DE ICONS *** ****************************************/


const DeliverTime = ()=> {

  return (
    <>
    <div className="deliver-information-container">

      <div className="send-information-Container">

        <div className="icon-deliver-container">
            <span><AiFillCar/></span>
        </div>

        <div className="icon-deliver-information-container">

            <div className="send-icon-information-container">
              <p>Envío gratis a todo el país</p>
              <span>
                <BsFillLightningFill/>
                {/* <p className='send-information-full-text'>FULL</p> */}
                <BsArrowDownShort/>
              </span>
            </div>

            <p>ver mas formas de entrega </p>

          </div>

      </div>

        <div className="return-information-container">
          <div className="icon-return-container">
          <span><RiArrowGoBackFill/></span>
          </div>
        
        <div className="return-text-container">
          <div className="returnText-container">
          <p>Devolcion gratis</p>
          <p>tienes 30 dias desde que lo recibes </p>
          </div>
          <p>Concoer mas</p>
        </div>

        </div>

    </div>

    </>
  )
};

export {DeliverTime};