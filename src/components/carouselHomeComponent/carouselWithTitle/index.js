import React from "react";
import { useState } from "react";

// component*******************************************************
import { CostumeCarousel } from "../../carousel/Carousel";
//******************************************************************

// CSS*******************************************************
import classes from  './IndexFirstSlider.module.css'
//******************************************************************

const CarouselComponentMain = (props)=> {
  const {
    productsGroup,
    title,
    subTitle,
    titleStyles,
    subTitleStyles,
    isfor3slices,
  } = props

  return (
  
      <div className={classes.carouselContainerFirstSlider}>
          <div >
            <h2 style={titleStyles} >{title}</h2>
            <span style={subTitleStyles}>{subTitle}</span>
          </div>
          
            <CostumeCarousel
            isfor3slices = {isfor3slices}
            productsGroup = {productsGroup}
          />
      </div>
  )
};


export { CarouselComponentMain };

// useEffect(()=>{
//   const fetchProduct =  async() => {
//     const res = await fetch('https://fakestoreapi.com/products?limit=15')
//     const data = await res.json();
//     setData1(data)
//     return data

// }
// fetchProduct()
// },[])

  /* {data1.length>0 && (
      <div className={classes.gliderContainerHorizontalSlider}>
      <Glider
        hasArrows={true}
        slidesToShow={5}
        slidesToScroll={2}
      > 
        { data1.length >0 && data1.map((slide) => (
          <Card1 slide={slide} key={slide.id} />
        ))}

      </Glider> 
    </div>

  )} */