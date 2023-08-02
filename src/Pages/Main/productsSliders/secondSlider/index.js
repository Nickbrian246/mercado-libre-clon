// Reat// ***************************************************************
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
import { Card2 } from './Card2'; 
import { CostumeCarousel } from "../../../../components/carousel/Carousel";
//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector } from "react-redux";
import { setFakeDataInformation } from "../../../../Store/mainReducer";
//*****************..**************************************************** 

import './indexSecondSlider.css';

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

const CarouselComponent2 = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation)

  useEffect(() => {
    // const card = generateManyBooks(15);
    // dispatch(setFakeDataInformation(card))
    fetchData().then((res) => dispatch(setFakeDataInformation(res)))
    .catch((err) => console.log(err))
  }, [dispatch])

  return (
    <>
      <div className="carousel-container-secondSlider">
        <div className="carousel-title">
          <h2 style={{ display: 'inline-block', marginRight: '50px' }}>Relacionado con tus visitas en Computación</h2>
          <span>Ver historial</span>
        </div>
        <div className="glider-container-secondSlider">
          <CostumeCarousel
              productsGroup = {dataForCard}
            />
        </div>

      </div>
    </>
  )
};

export { CarouselComponent2 };
/**
 *           <Glider
            hasArrows={true}
            slidesToShow={5}
            slidesToScroll={5}
          >
            {dataForCard.map((slide) => (
              <Card2 slide={slide} key={slide._id} />
            ))}

          </Glider>
 */