import React from "react";

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../Store/productSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";
/*********************************************************************************** */

/** CSS **************************************************************/
import './cardSlider.css'
/******************************************************************** */

const CardHorizontalSlider = (props) => {

  const {
  _id,
  name,
  price,
  image,
  description
} = props.slide;

const navigate= useNavigate();
const dispatch = useDispatch();

const handleClickContainer = () => {
  dispatch(setProductSelected({
    price,
    image,
    name,
    _id,

    description
  }))
  navigate('/producto');

}

  return (
    <>
    <div className="card-container-horizontalSlider" onClick={() => { handleClickContainer() }} >
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