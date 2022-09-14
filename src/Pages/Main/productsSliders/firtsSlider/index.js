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
//******************************************************************
import './indexFirstSlider.css'

import { useDispatch } from "react-redux";
import { fetchProduct } from "./fetchData";


const CarouselComponent = () => {
  const [data1,setData1 ] = useState([])
  const dispatch = useDispatch();
 

  useEffect(()=> {
    const card = generateManyBooks(15);
    setData1(card)
  
  },[])
  
// useEffect(()=>{
//   const fetchProduct =  async() => {
//     const res = await fetch('https://fakestoreapi.com/products?limit=15')
//     const data = await res.json();
//     setData1(data)
//     return data

// }
// fetchProduct()
// },[])



  return (
  
      <div className="carousel-container-firstSlider">
        <div className="carousel-title">
          <h2 style={{ display: 'inline-block', marginRight: '50px' }}>Basado en tu última visita</h2>
          <span>Ver historial</span>
        </div>
        
        <div className="glider-container-firstSlider">
          <Glider
            hasArrows={true}
            slidesToShow={5}
            slidesToScroll={2}
            
            
          > 
            {data1.map((slide) => (
              <Card1 slide={slide} key={slide._id} />
            ))}

          </Glider> 
        </div>
      </div>
  
  )
};


export { CarouselComponent };
