import React from "react";
import { useState } from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

// libreria faker****************************************************
import {generateManyBooks} from '../../../../utils/fakerJS/fakedata'; 
// *****************************************************************

// libreria carousel*************************************************
import Carousel, { centeredPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
//******************************************************************* 

// componnent*******************************************************
import {Card1} from './Card';
//******************************************************************


const CarouselComponent = () => {
  const card = generateManyBooks(15);
  
  const images = [ ];
  const [selectedIndex, setSelectedIndex] = useState(5);
  const [selectedImage, setSelectedImage] = useState (card[0]);

//   const pushCard = () => {
//     const newsCards = card.slice(0,selectedIndex);
//     images.push(newsCards);
// }
// pushCard()

  // const cardsArray = card;
  // const {image, name, price, _id} = cardsArray[0];
  // console.log(image,name,price,_id, 'hello there');
  


const selectNewImage = (index, card, next = true) => {
  const condition = next ? selectedIndex < card.length < -1  : selectedIndex > 0 ;
  const nextIndex = next ? (condition ? selectedIndex + 5 :0  ) 
  : condition  ? selectedIndex -1 : card.length -1 ;
  setSelectedImage(card[nextIndex]);
  setSelectedIndex(nextIndex);
}

const previus = () => {
  selectNewImage(selectedIndex, card, false);
  // const condition = selectedIndex > 0;
  // const nextIndex = condition ? selectedIndex -1 : images.length -1 ;
  // setSelectedImage(images[nextIndex]);
  // setSelectedIndex(nextIndex);
}
const next = () => {
  selectNewImage(selectedIndex, card);
  // const condition = selectedIndex < images.length;
  // const nextIndex = condition ? selectedIndex +1 : 0 ;
  // setSelectedImage(images[nextIndex]);
  // setSelectedIndex(nextIndex);
}

const next2 = () => {
  const testing = card.slice(0,selectedIndex);
  console.log('this is testing', testing);
}

// const slides = card.map((slide) => (
//   <Card1 slide= {slide} key = {slide._id}/>
// ))
  return (
    <> 
    <div className="carousel-container">
      <div className="carousel-title">
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Basado en tu última visita</h2>
        <span>Ver historial</span>
      </div>
      <Glider
        hasArrows={true}
        slidesToShow={5}
        slidesToScroll={5}
>
          {card.map((slide) => (
              <Card1 slide= {slide} key = {slide._id}/>
          ))}

      </Glider>
      {/* <Carousel
      
      plugins={[
      {
        resolve: slidesToShowPlugin,
        options: {
        numberOfSlides: 2
        }
      },
      'clickToChange',
      'arrows',
      'centered',
    ]}
    animationSpeed={500}
        offset={5}
        itemWidth={250}
        slides={slides}
        /> */}
    </div>
    </>
  )
};


export {CarouselComponent};
