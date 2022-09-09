// Reat// ***************************************************************
import React, { useEffect,useState} from "react";
// **********************************************************************

// libreria faker *******************************************************
import {generateManyBooks} from '../../../../utils/fakerJS/fakedata'; 
// **********************************************************************

// libreria carousel****************************************************
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
//**********************************************************************

// components***********************************************************
import {Card2} from './Card2';
//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector} from "react-redux";
import { setFakeDataInformation } from "../../../../Store/mainReducer";
//*****************..**************************************************** 

const CarouselComponent2 = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation)
  

useEffect(()=> {
  const card = generateManyBooks(15);
  dispatch(setFakeDataInformation(card))
},[])

  

// const slides2 = dataForCard.map((slide2) => (
//   <Card2 slide= {slide2} key = {slide2._id}/>
// )
// )
  return (
    <> 
    <div className="carousel-container">
      <div className="carousel-title">
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Relacionado con tus visitas en Computación</h2>
        <span>Ver historial</span>
      </div>
      <Glider
        hasArrows={true}
        slidesToShow={5}
        slidesToScroll={5}
>
          {dataForCard.map((slide) => (
              <Card2 slide= {slide} key = {slide._id}/>
          ))}

      </Glider>
      {/* <Carousel
      
      plugins={[
      {
        resolve: slidesToShowPlugin,
        options: {
        numberOfSlides: 1
        }
      },
      'clickToChange',
      'arrows',
      'centered',
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


export {CarouselComponent2};
