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
    <div className="card-container-thirdSlider" >
      <div className="image-container-secondSlider">
        <img 
        className="card-image-thirdSlider" 
        src= {`${image}`}
        alt="product"/>

      </div>
      <div className="card-name-container-thirdSlider">
      <div className="description-container-thirdSlider">
          <p>{name}</p>
      </div>
      <p>{`$ ${price} MX`}</p>
      <p>hello there</p>

      <p className="card-description-hover-thirdSlider">descrptio onli if hoover</p>
      </div>

    </div>
    
    </>
  )
};
  

export {Card3};