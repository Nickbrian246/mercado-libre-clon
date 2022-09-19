import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { generateManyImages } from "../../../../utils/fakerJS/fakedata";
import { CardVerticalProduct } from "./cardVerticalViewer";
import './verticalProductViewer.css';


const VerticalProductViewer = () => {
const [imageList, setImageList] = useState([]);
const [currentPosition, setCurrentPosition] = useState('');
const [isActive, setIsActive] = useState(false)

useEffect(()=> {
  const images = generateManyImages();
  setImageList(images)
},[]);


return (
  <>
  <div className="verticalProductViewer-container">
    {imageList.map((data) => (
        <CardVerticalProduct
        data = {data}
        key={data.id}
        setCurrentPosition = {setCurrentPosition}
        setIsActive={setIsActive}
        isActive={isActive}
        />
    ))}

  </div>

  </>
)
};

export {VerticalProductViewer};