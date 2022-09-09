// React// ***************************************************************
import React, { useEffect, useState } from "react";
// **********************************************************************

// libreria faker *******************************************************
import { generateManyBooks } from '../../../../utils/fakerJS/fakedata';
// **********************************************************************

// libreria carousel****************************************************
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
//**********************************************************************

// components***********************************************************
import { Card3 } from './Card3';

//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector } from "react-redux";
import { setFakeDataInformation2 } from "../../../../Store/mainReducer";
//*****************..**************************************************** 

const CarouselComponent3 = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)


  useEffect(() => {
    const card = generateManyBooks(15);
    dispatch(setFakeDataInformation2(card))
  }, [])


  const slides2 = dataForCard.map((slide2) => (
    <Card3 slide={slide2} key={slide2._id} />
  ))
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-title">
          <h2 style={{ display: 'inline-block', marginRight: '50px' }}>Ofertas</h2>
          <span>Ver todas </span>
        </div>
        <Glider
          hasArrows={true}
          slidesToShow={5}
          slidesToScroll={5}
        >
          {dataForCard.map((slide) => (
            <Card3 slide={slide} key={slide._id} />
          ))}

        </Glider>
        {/* <Carousel
      
      plugins={[
      // {
      //   // resolve: slidesToShowPlugin,
      //   // options: {
      //   // numberOfSlides: 1
      //   // }
      // },
      
      'clickToChange',
      'arrows',
      
    ]}
    animationSpeed={500}
        offset={0}
        itemWidth={250}
        slides={slides2}
        /> */}
      </div>
    </>
  )
};


export { CarouselComponent3 };