import React from "react";

import './cardStyle.css';

import {MdSubdirectoryArrowRight} from 'react-icons/md';


const CardAnswer = (props)=> {
  const { question, defaultQuestion} = props.data;

  return(
    <>
    <div className="Answer-Container">
    <p className="question">{`${question}`}</p>
    <div className="Answer-seller-container">
      <span className="item-icon"><MdSubdirectoryArrowRight/></span>
      <p className="answer"> {`${defaultQuestion}`}</p>
    </div>

    </div>
    
    </>
  )
};

export {CardAnswer};