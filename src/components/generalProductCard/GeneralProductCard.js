import React from "react";

/** CSS **************************************************************/
import classes from "./Card1.module.css";
/******************************************************************** */

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../Store/productSelected";
import { setImageSelected } from "../../Store/imageSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";
/*********************************************************************************** */
import {HiLightningBolt}  from "react-icons/hi"

const GeneralProductCard = (props) => {
  const {
    image,
    name,
    price,
    _id,
    description,
    isDiscount,
  } = props;

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
    dispatch( setImageSelected({
      images:image,
      id:_id,
    }))
    navigate(`/producto/${_id}`);
  }
  let offers = Math.random() * (1 - 0 ) + 0;
  let shortDescription = " "

  if(description.length > 131) {
    let truncateDescription = description.slice(0,131)
    let ellipsis = truncateDescription.concat("...")
    shortDescription = ellipsis
  }
  return (
    <>
    <div className={classes.cardContainer} onClick={()=>{handleClickContainer()}}>
      <picture className={classes.imageContainer}>
        <img alt="product"  src={image} className={classes.productImage}/>
      </picture>
      <div className= {classes.ProductInformationContainer}>
        <article className= {classes.PriceProductContainer}>
          <p className={`${offers < 0.7 ? classes.price : classes.priceMarginForNoFreeShipping}`}>${price}</p>
        </article>
        {(offers < 0.7  || isDiscount) && (
          <div className={classes.freeShippingContainer}>
            <p className= {classes.freeShipping}>
                Envío Gratis
            </p>
            <span style={{  color:" #00a650"}}>
                <HiLightningBolt/>
            </span>
            <p className= {classes.freeShipping}>
              FULL
            </p>
          </div>
        )}
        <article  className= {classes.productDescriptionContainer}>
          <p className = {classes.productDescription} >{description.length >131 ? shortDescription : description}</p>
        </article>
      </div>
    </div>
    </>
  )
};

export { GeneralProductCard };

// style={{width:'224px', height:'330px', background:'white', }}
// style = {{width:'224px', height:'224px', cursor:'pointer'}}