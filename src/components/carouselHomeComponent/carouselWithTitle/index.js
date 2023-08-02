import React from "react";
import { useState } from "react";

// component*******************************************************
import { useEffect } from "react";
import { CostumeCarousel } from "../../carousel/Carousel";
//******************************************************************

// CSS*******************************************************
import classes from  './IndexFirstSlider.module.css'
//******************************************************************
// const BASE_URL = process.env.REACT_APP_API_KEY
// const fetchData = async () => {
//   try {
//     const data = await fetch(`${BASE_URL}products?limit=15`);
//     const response = await data.json()
//     return response
//   } catch (error) {
//     console.log(error);
//   }
// }
// useEffect(()=> {
//   // const card = generateManyBooks(15);
//   // setData1(card)
//   fetchData().then((res) => setData1(res))
//   .catch((err) => console.log(err))
// },[])

const CarouselComponentMain = (props)=> {
  const {
    productsGroup,
    title,
    subTitle,
    titleStyles,
    subTitleStyles,
  } = props

  return (
  
      <div className={classes.carouselContainerFirstSlider}>
          <div >
            <h2 style={titleStyles} >{title}</h2>
            <span style={subTitleStyles}>{subTitle}</span>
          </div>
          
            <CostumeCarousel
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