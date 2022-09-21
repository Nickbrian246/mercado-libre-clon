import React from 'react';
import './cardVerticalViewer.css';

const CardVerticalProduct = ({
  data,
  setPosition,
  position,
}) => {

  const {
    images,
    id,
    status,
  } =data;

  const isActive = position === id;

  const handleClickContainer = () => {
    setPosition(id);
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