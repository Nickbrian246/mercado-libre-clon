import React from "react";
// componnent*******************************************************
import {CostumeCarousel} from "../../../../components/carousel/Carousel"
//******************************************************************
// CSS*******************************************************
import classes from  './IndexFirstSlider.module.css'
//******************************************************************

const CarouselComponent = (props) => {
  const {
    title,
    subTitle,
    groupOf15Products,
    isDiscount
  } = props

  return (
      <div className={classes.carouselContainerFirstSlider}>
          <div >
            <h2 >{title}</h2>
            <span>{subTitle}</span>
          </div>
          
            <CostumeCarousel
            productsGroup = {groupOf15Products}
            isDiscount = {isDiscount}
          />
      </div>
  )
};
export { CarouselComponent };
