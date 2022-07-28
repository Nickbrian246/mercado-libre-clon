import React, { useState } from "react";
import { Rate } from 'antd';

import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';

import './cardNegatives.css';
const CardNegativesQuestionsRank= () => {
  const [likeButton, setLikeButton] = useState(false);
  const [disLikeButton, setDislikeButton] = useState(false);

  

  const handleLikeButton= () => {
    setLikeButton(!likeButton);
    setDislikeButton(false)
    

  }
  const handleDisLikeButton= () => {
    setDislikeButton(!disLikeButton);
    setLikeButton(false)
  

  }




  return(
    <>
    <div className="cardQuestions-container">
      <div >
        <Rate defaultValue={3}/>
      </div>
      <div>
        <p className="title"> Regular</p>
        <p className="text-title">Es funcional, bonito pero plastico de mala calidad. 1. Las cerdas del cepillo no vienen adheridas y se salen. 2. El cilindro donde viene el limpiador es dificil de separ del cepillo, cosa que hizo que el plastico sufriera una cuarteadura. 3. Fuera de detalles es funcional para su uso, limpieza.</p>
      </div>

      <div className="icon-container">

      <div style={{width:'50px', display:"flex"}}>
      <AiOutlineLike 
      onClick={()=> {handleLikeButton()}}
      className={`icon-normal
      ${likeButton ?  'icon-active': 'icon-normal' }`}
      /> 
      <p
      className="counter">
        {likeButton ? '1': '0'}
      </p>
      </div>

      <div 
      style={{
        width:'50px',
        display:"flex",
        }}>
      < AiOutlineDislike
      onClick={()=> {handleDisLikeButton()}}
      className={`icon-normalDislike 
      ${disLikeButton ? 'icon-active': 'icon-normalDislike' }`}
      /> 
      <p
      className="counter">
        {disLikeButton ? '1': '0'}
      </p>
      </div>

      </div>

    </div>
    
    
    </>
  )
};

export {CardNegativesQuestionsRank};