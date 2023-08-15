// React// ***************************************************************
import React, { useEffect } from "react";
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
import { setFakeProductsGroup2 } from "../../../../Store/mainReducer";
//*****************..****************************************************

//**CSS****************************************************************** */
import './indexThirdSlider.css';
//**********************************************************************

const CarouselComponent3 = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)

  useEffect(() => {
    const card = generateManyBooks(15);
    dispatch(setFakeProductsGroup2(card))
  }, [])

  return (
    <>
      <div className="carousel-container-thirdSlider">
        <div className="carousel-title">
          <h2 style={{ display: 'inline-block', marginRight: '50px' }}>Ofertas</h2>
          <span>Ver todas </span>
        </div>
        <div className="glider-container-thirdSlider">
          <Glider
            hasArrows={true}
            slidesToShow={5}
            slidesToScroll={5}
          >
            {dataForCard.map((slide) => (
              <Card3 slide={slide} key={slide._id} />
            ))}

          </Glider>
        </div>
      </div>
    </>
  )
};

export { CarouselComponent3 };