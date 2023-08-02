import React from "react";

/** CSS **************************************************************/
import classes from "./Card1.module.css";
/******************************************************************** */

/* React Redux* *******************************************************/
import { useDispatch } from "react-redux";
import { setProductSelected } from "../../../../Store/productSelected";
import { setImageSelected } from "../../../../Store/imageSelected";
/********************************************************************** */

/* React Router********************************************************************* */
import { useNavigate } from "react-router-dom";
/*********************************************************************************** */
import {HiLightningBolt}  from "react-icons/hi"

const Card1 = (props) => {
  const {
    image,
    name,
    price,
    _id,
    description,
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
    navigate('/producto');
  }
  let offert = Math.random() * (1 - 0 ) + 0;
  return (
    <>
      <div className={classes.cardContainerFirstSlider} onClick={() => { handleClickContainer() }}>
        <div className={classes.imageContainerFirstSlider}>
          <img
            className={classes.cardImageFirstSlider}
            src={`${image}`}
            alt="product" />

        </div>
        <div className={classes.cardNameContainerFirstSlider}>
          <p className={classes.DescriptionContainerPrice}>{`$${price} `}</p>
          {
            offert >0.50 && (
              <div className={classes.DescriptionOfferContainer}>
              <p className={classes.DescriptionOfferText}>
                Envio Gratis
              </p>
              <span  className={classes.DescriptionOfferIcon}>
              <HiLightningBolt/>
              </span>
              <p  className={classes.DescriptionOfferTextFull}>
              FULL
              </p>
            </div>
            )
          }
          <p className={classes.DescriptionContainerDescription}>{description}</p>

        </div>

      </div>

    </>
  )
};

export { Card1 };

// style={{width:'224px', height:'330px', background:'white', }}
// style = {{width:'224px', height:'224px', cursor:'pointer'}}