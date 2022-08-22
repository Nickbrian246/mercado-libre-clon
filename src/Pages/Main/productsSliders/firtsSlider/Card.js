import React from "react";

/** CSS **************************************************************/
import './card.css';
/******************************************************************** */

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../../Store/productSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate} from "react-router-dom";

/*********************************************************************************** */

const Card1 = (props) => {
const {
  image,
  name,
  price,
  _id,
  status,
        } = props.slide;

  const navigate= useNavigate()
  const dispatch= useDispatch()

  const handleClickContainer = ()=> {
    dispatch(setProductSelected({
      price,
      image,
      name,
      _id,
      status,
    }))
      navigate('/producto');

  }

  return (
    <>
    <div className="card-container" onClick={()=> {handleClickContainer()}}>
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