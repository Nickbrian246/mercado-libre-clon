import React from "react";

import './card3.css'

const Card3 = (props) => {
 const {
  _id,
  name,
  price,
  image,
} = props.slide;
  return (
    <>
    <div className="card-container" >
      <div>
        <img 
        className="card-image" 
        src= {`${image}`}
        alt="product"/>

      </div>
      <div className="card-name-container">
      <p>{`${name}`}</p>
      <p>{`$ ${price} MX`}</p>
      <p>hello there</p>

      <p className="card-description-hover">descrptio onli if hoover</p>
      </div>

    </div>
    
    </>
  )
};
  

export {Card3};