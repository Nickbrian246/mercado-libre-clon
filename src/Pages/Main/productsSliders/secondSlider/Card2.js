import React from "react";
/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../../Store/productSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";
/*********************************************************************************** */

//**CSS *************************************************************************** */
import './card2.css';
//******************************************************************************** */

const Card2 = (props) => {
  const {
    image,
    name,
    price,
    _id,
    description,
  } = props.slide;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickContainer = () => {
    dispatch(setProductSelected({
      image,
      name,
      price,
      _id,
      description,
    }))
    navigate('/producto')
  }

  return (
    <>
    <div className="card-container-secondSlider" onClick={()=> {handleClickContainer()}} >
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