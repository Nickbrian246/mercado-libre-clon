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
import { CarouselComponentMain } from "../../../components/carouselHomeComponent/carouselWithTitle";
//**********************************************************************

//Redux ****************************************************************
import { useDispatch, useSelector} from "react-redux";
import { setFakeProductsGroup2 } from "../../../Store/mainReducer";
//*****************..**************************************************** 

//CSS ****************************************************************
import './indexHorizontalSlider.css';
//CSS ****************************************************************

const HorizontalSlider = (props) => {
  const {groupOfProducts} = props
  // const dispatch = useDispatch()
  // const dataForCard = useSelector((state) => state.fakeDataInformation.fakeInformation2)
  

// useEffect(()=> {
//   const card = generateManyBooks(15);
//   dispatch(setFakeProductsGroup2(card))
// },[])

console.log(groupOfProducts,'soy el conjunto de proudctos ')

  return (
    <> 
    <div className="carousel-container-horizontalSlider">
      <div >
        <h2 style={{display:'inline-block', marginRight:'50px'}}>Publicaciones del vendedor</h2>
      </div>
    <div className="glider-container-HorizontalSlider">
      <CarouselComponentMain 
      productsGroup = {groupOfProducts}
      title = "Quienes vieron este producto también compraron"
      isfor3slices = {true}
      titleStyles = {{
        fontSize:'24px',
        color:"rgba(0,0,0,.9)",
        fontWeight:'400',
        lineHeight:"1.25",
      }}
      />

    </div>

    </div>
    </>
  )
};


export {HorizontalSlider};
    
