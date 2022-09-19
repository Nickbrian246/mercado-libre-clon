import React, { useState } from "react";
import { Rate } from 'antd';

import {
  AiOutlineLike,
  AiOutlineDislike,
} from 'react-icons/ai';

import './cardStyles.css';
const CardAllQuestionsRank= (props ) => {
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
    <div className="cardQuestions-container">
      <div >
        <Rate defaultValue={rateStarts}/>
      </div>
      <div>
        <p className="title"> Regular</p>
        <p className="text-title">{`${Comment}`}</p>
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

export {CardAllQuestionsRank};