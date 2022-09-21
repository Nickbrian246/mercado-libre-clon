import React from 'react';
import './cardVerticalViewer.css';
import { useDispatch } from 'react-redux';
import { setImageSelected } from '../../../../Store/imageSelected';

const CardVerticalProduct = ({
  data,
  setPosition,
  position,
}) => {

  const {
    images,
    id,
  } =data;
  const dispatch= useDispatch()

  const isActive = position === id;

  const handleClickContainer = () => {
    setPosition(id);
    dispatch(setImageSelected({
      images,
      id,
    }))
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
      }} src={images} alt="products view"/>
    </div>
    
    </>
  )

};
export {CardVerticalProduct};