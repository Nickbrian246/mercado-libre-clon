import React, { useState } from "react";

import './index.css';

/*Components********************************************* */
import { AllQuestions } from "./all";
import { Negatives } from "./negatives";
import { Positives } from "./positives";
/********************************************************** */
const QuestionsRate = ()=> {

  const [allButton, setAllButtons ]= useState(true);
  const [positivesButton, setPositivesButtons ]= useState(false);
  const [negativesButton, setNegativesButtons ]= useState(false);

  const handleAllButton = () => {
    setAllButtons(true);
    setPositivesButtons(false)
    setNegativesButtons(false);

  }

  const  handlePositivesButtons = () => {
    setAllButtons(false);
    setPositivesButtons(true)
    setNegativesButtons(false);

  }

  const handleNegativesButtons = () => {
    setAllButtons(false);
    setPositivesButtons(false)
    setNegativesButtons(true);


  }
  return(
    <>
    <div className="questionRate-Container">
      <div className="buttons-container">
        <button
        onClick={()=> {handleAllButton()}} 
        className={`${(allButton ? 'btn-selected' :'btn-style ' )}`}>
          Todas
        </button>
        <button
        onClick={()=> {handlePositivesButtons()}} 
        className={`${(positivesButton ? 'btn-selected' :'btn-style ' )}`}>
          Positivas
        </button>
        <button
        onClick={()=> {handleNegativesButtons()}} 
        className={`${(negativesButton ? 'btn-selected' :'btn-style ' )}`}>
          Negativas
        </button>
      </div>


      <div className="opinions-container">
        {allButton === true && (
          <AllQuestions/>
        )}
        {negativesButton === true && (
          <Negatives/>
        )}
        {positivesButton === true && (
          <Positives/>
        )}
      </div>

    </div>
    
    </>
  )
};


export {QuestionsRate};