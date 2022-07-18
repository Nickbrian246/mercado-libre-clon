// React// ***************************************************************
import React, { useEffect,useState} from "react";
// **********************************************************************

// libreria faker *******************************************************
import {generateManyBooks} from '../../../utils/fakerJS/fakedata'; 
// **********************************************************************

// libreria carousel****************************************************
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
//**********************************************************************

// components***********************************************************
import {CardHorizontalSlider} from './CardHorizontalSlider';

//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector} from "react-redux";
import { setFakeDataInformation2 } from "../../../Store/mainReducer";
//*****************..**************************************************** 

const HorizontalSlider = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)
  

useEffect(()=> {
  const card = generateManyBooks(15);
  dispatch(setFakeDataInformation2(card))
},[])


const slides2 = dataForCard.map((slide2) => (
  <CardHorizontalSlider slide= {slide2} key = {slide2._id}/>
))
  return (
    <> 
    <div className="carousel-container">
      <div className="carousel-title">
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Publicaciones del vendedor</h2>
      </div>
      <Carousel
      
      plugins={[
      {
        resolve: slidesToShowPlugin,
        options: {
        numberOfSlides: 3
        }
      },
      
      'clickToChange',
      'arrows',
      
    ]}
    animationSpeed={500}
        offset={-16}
        itemWidth={250}
        slides={slides2}
        />
    </div>
    </>
  )
};


export {HorizontalSlider};