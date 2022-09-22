import React from "react";

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../../Store/productSelected";
import { setImageSelected } from "../../../../Store/imageSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";
/*********************************************************************************** */
import './card3.css'

const Card3 = (props) => {
 const {
  image,
    name,
    price,
    _id,
    description,
} = props.slide;

const navigate = useNavigate()
const dispatch = useDispatch()

const handleClickContainer = () => {
  dispatch(setProductSelected({
    price,
    image,
    name,
    _id,

    description
  }))

  dispatch(setImageSelected({
    images:image,
    id:_id,
  }))

  navigate('/producto');
}

  return (
    <>
    <div className="card-container-thirdSlider" onClick={() => { handleClickContainer() }} >
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