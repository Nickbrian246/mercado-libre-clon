import React from "react";

import './card.css'

const Card = (props) => {
const {src, topText,price,subscriptionInfo,background} = props.data;

  return (
    <>
  <div style={{
    width:'384px',
    height:'250px',
    display:'flex',
    position:'relative',
    cursor:'pointer'
  }}>
    <img style={{
      width:'384px',
      height:'250px',
      borderRadius:'10px',
      }} src={ ` ${background}`} alt="1" /> 

    
  </div>
  <div style={{
    display:'flex',
    position:'absolute',
    marginLeft:'10px',
    cursor:'pointer',
    width:'384px',
    height:'112px',
    marginTop:'40%'}}>
      <div style={{width:'80px', height:'80px'}} >
        <img style={{ borderRadius:'10px',width:'80px', height:'80px'}} src= { `${src}`}alt="" />
      </div>
      <div className="card-text-container">
        <p>{ ` ${topText}`}</p>
        <p>{ ` ${price}`}</p>
        <p>{ ` ${subscriptionInfo}`}</p>
      </div>
    </div>
    
    </>
  )
};

export {Card};