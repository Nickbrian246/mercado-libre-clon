import React from "react";

import './card2.css';

const Card2 = (props) => {
 const {
  image,
  title,
  price,
  id,
  description,
} = props.slide;
  return (
    <>
    <div className="card-container-secondSlider" >
      <div className="image-container-secondSlider">
        <img 
        className="card-image-secondSlider" 
        src= {`${image}`}
        alt="product"/>

      </div>
      <div className="card-name-container-secondSlider">
      <div className="description-container-secondSlider">
          <p>description</p>
      </div>
      <p>{`$ ${price} MX`}</p>
      <p>hello there</p>

      <p className="card-description-hover-secondSlider">descrptio onli if hoover</p>
      </div>

    </div>
    
    </>
  )
};
  

export {Card2};