// Reat// ***************************************************************
import React, { useEffect,useState} from "react";
// **********************************************************************

// libreria faker *******************************************************
import {generateManyBooks} from '../../../../utils/fakerJS/fakedata'; 
// **********************************************************************

// libreria carousel****************************************************
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
//**********************************************************************

// components***********************************************************
import {Card3} from './Card3';

//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector} from "react-redux";
import { setFakeDataInformation2 } from "../../../../Store/mainReducer";
//*****************..**************************************************** 

const CarouselComponent3 = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)
  

useEffect(()=> {
  const card = generateManyBooks(15);
  dispatch(setFakeDataInformation2(card))
},[])

  
console.log(dataForCard,'from second dslicder');
const slides2 = dataForCard.map((slide2) => (
  <Card3 slide= {slide2} key = {slide2._id}/>
)
)
  return (
    <> 
    <div className="carousel-container">
      <div className="carousel-title">
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Ofertas</h2>
        <span>Ver todas </span>
      </div>
      <Carousel
      
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
        />
    </div>
    </>
  )
};


export {CarouselComponent3};