import React from "react";

import { cardSlices } from "./card/cardSlices";

// libreria carousel***********************************************************************
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// libreria carousel***********************************************************************

const BenefitsSlider = () => {


  return (
    <>
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
        offset={25}
        itemWidth={384}
        slides={cardSlices}
    />
    </>
  )
};

export {BenefitsSlider};