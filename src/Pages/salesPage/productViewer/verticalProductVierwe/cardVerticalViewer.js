import React from 'react';
import { useState } from 'react';
import './cardVerticalViewer.css';

const CardVerticalProduct = ({
  data,
  setCurrentPosition,
  setIsActive,
  isActive
}) => {
  const {
    images,
    id,
    status,
  } =data;

  const handleClickContainer = () => {
    setCurrentPosition(id);
    setIsActive(true);
  }


  return (
    <>
    <div  className={
      `image-verticalProduct-container
      ${isActive && 'image-verticalProduct-container-active'}`
      }
      onClick={()=> {handleClickContainer()}}>
      <img style={{
        width:'100px'
      }} src={images} alt="producto imagen"/>
    </div>
    
    </>
  )

};
export {CardVerticalProduct};