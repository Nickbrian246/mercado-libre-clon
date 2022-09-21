import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { generateManyImages } from "../../../../utils/fakerJS/fakedata";
import { CardVerticalProduct } from "./cardVerticalViewer";
import './verticalProductViewer.css';


const VerticalProductViewer = () => {
const [imageList, setImageList] = useState([]);
const [position, setPosition] = useState('');

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
        setPosition={setPosition}
        position={position}
        />
    ))}

  </div>

  </>
)
};

export {VerticalProductViewer};