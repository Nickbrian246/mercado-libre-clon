import React from "react";

/** CSS **************************************************************/
import './card1.css';
/******************************************************************** */

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../../Store/productSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";

/*********************************************************************************** */

const Card1 = (props) => {

  const {
    image,
    title,
    price,
    id,
    description,
  } = props.slide;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickContainer = () => {
    dispatch(setProductSelected({
      price,
      image,
      title,
      id,

      description
    }))
    navigate('/producto');

  }

  return (
    <>
      <div className="card-container-firstSlider" onClick={() => { handleClickContainer() }}>
        <div className="image-container-firstSlider">
          <img
            className="card-image-firstSlider"
            src={`${image}`}
            alt="product" />

        </div>
        <div className="card-name-container-firstSlider">
          <div className="description-container-firstSlider">
            <p>description</p>
          </div>
          <p>{`$ ${price} MX`}</p>
          <p>hello there</p>

          <p className="card-description-hover-firstSlider">description</p>
        </div>

      </div>

    </>
  )
};

export { Card1 };

// style={{width:'224px', height:'330px', background:'white', }}
// style = {{width:'224px', height:'224px', cursor:'pointer'}}