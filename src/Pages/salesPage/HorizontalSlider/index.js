// React// ***************************************************************
import React, { useEffect} from "react";
// **********************************************************************

// libreria faker *******************************************************
import {generateManyBooks} from '../../../utils/fakerJS/fakedata'; 
// **********************************************************************

// libreria carousel****************************************************
import Glider from 'react-glider';
//**********************************************************************

// components***********************************************************
import {CardHorizontalSlider} from './CardHorizontalSlider';

//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector} from "react-redux";
import { setFakeDataInformation2 } from "../../../Store/mainReducer";
//*****************..**************************************************** 

//CSS ****************************************************************
import './indexHorizontalSlider.css';
//CSS ****************************************************************

const HorizontalSlider = () => {
  const dispatch = useDispatch()
  const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)
  

useEffect(()=> {
  const card = generateManyBooks(15);
  dispatch(setFakeDataInformation2(card))
},[])



  return (
    <> 
    <div className="carousel-container-horizontalSlider">
      <div >
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Publicaciones del vendedor</h2>
      </div>
    <div className="glider-container-HorizontalSlider">
      <Glider
              hasArrows={true}
              slidesToShow={3}
              slidesToScroll={3}
        > 
              {dataForCard.map((slide) => (
                <CardHorizontalSlider slide={slide} key={slide._id} />
              ))}

      </Glider> 

    </div>

    </div>
    </>
  )
};


export {HorizontalSlider};
    
