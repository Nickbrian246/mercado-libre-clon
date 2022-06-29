import React from "react";

import './card.css';

const Card1 = (props) => {
const {
  image,
  name,
  price,
  _id} = props.slide;

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
  

export {Card1};

// style={{width:'224px', height:'330px', background:'white', }}
// style = {{width:'224px', height:'224px', cursor:'pointer'}}