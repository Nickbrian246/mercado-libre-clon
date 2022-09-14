import React from "react";

import './cardSlider.css'

const CardHorizontalSlider = (props) => {
 const {
  _id,
  name,
  price,
  image,
} = props.slide;
  return (
    <>
    <div className="card-container-horizontalSlider" >
      <div className="image-container-horizontalSlider">
        <img 
        className="card-image-horizontalSlider" 
        src= {`${image}`}
        alt="product"/>

      </div>
      <div className="card-name-container-horizontalSlider">
      <div className="description-Container-horizontalSlider">
        <p>{`${name}`}</p>
      </div>
      <p>{`$ ${price} MX`}</p>
      <p>hello there</p>

      <p className="card-description-hover-horizontalSlider">descrptio onli if hoover</p>
      </div>

    </div>
    
    </>
  )
};
  

export {CardHorizontalSlider};