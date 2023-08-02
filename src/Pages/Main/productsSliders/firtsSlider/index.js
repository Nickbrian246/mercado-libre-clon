import React from "react";
import { useState } from "react";
import Glider from 'react-glider';
// import 'glider-js/glider.min.css';

// libreria faker****************************************************
import { generateManyBooks } from '../../../../utils/fakerJS/fakedata';
// *****************************************************************

// libreria carousel*************************************************
// import Carousel, { centeredPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import { autoplayPlugin } from '@brainhubeu/react-carousel';
//******************************************************************* 

// componnent*******************************************************
import { Card1 } from './Card';
import { useEffect } from "react";
import {CostumeCarousel} from "../../../../components/carousel/Carousel"
//******************************************************************

// CSS*******************************************************
import classes from  './IndexFirstSlider.module.css'
//******************************************************************
const BASE_URL = process.env.REACT_APP_API_KEY
const fetchData = async () => {
  try {
    const data = await fetch(`${BASE_URL}products?limit=15`);
    const response = await data.json()
    return response
  } catch (error) {
    console.log(error);
  }
}

const CarouselComponent = () => {
  const [data1,setData1 ] = useState([]);
  useEffect(()=> {
    // const card = generateManyBooks(15);
    // setData1(card)
    fetchData().then((res) => setData1(res))
    .catch((err) => console.log(err))
  },[])
  
  return (
  
      <div className={classes.carouselContainerFirstSlider}>
          <div >
            <h2 >Basado en tu última visita</h2>
            <span>Ver historial</span>
          </div>
          
            <CostumeCarousel
            productsGroup = {data1}
          />
      </div>
  
  )
};


export { CarouselComponent };

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