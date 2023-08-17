import React, { useState } from "react";
import { Rate } from 'antd';

import {AiOutlineDislike,} from 'react-icons/ai';
import {BiLike} from 'react-icons/bi'
import cardPositivesStyles from './cardPositives.module.css';
const CardPositivesQuestionsRank= (props) => {
  const {Comment,rateStarts,status} = props.data;
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
    <div className={cardPositivesStyles.cardQuestionsContainer}>
      <div >
        <Rate defaultValue={rateStarts}/>
      </div>
      <div>
        <p className={cardPositivesStyles.title}> bueno</p>
        <p className={cardPositivesStyles.textTitle}>{`${Comment}`}</p>
      </div>

      <div className={cardPositivesStyles.iconContainer}>

      <div style={{width:'50px', display:"flex"}}>
      <AiOutlineDislike 
      onClick={()=> {handleLikeButton()}}
      className={`
      ${likeButton ?  cardPositivesStyles.iconActive: cardPositivesStyles.iconNormal }`}
      /> 
      <p
      className={cardPositivesStyles.Counter}>
        {likeButton ? '1': '0'}
      </p>
      </div>

      <div 
      style={{
        width:'50px',
        display:"flex",
        }}>
      < BiLike
      onClick={()=> {handleDisLikeButton()}}
      className={` 
      ${disLikeButton ? cardPositivesStyles.iconActive : cardPositivesStyles.iconNormalDislike}`}
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

export {CardPositivesQuestionsRank};