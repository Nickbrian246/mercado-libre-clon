import React from "react";

import './card.css';

import { Button } from 'antd';


const Card = (props) => {

const {
  title,
  infoPrice,
  src,
  alt,
} = props.data;

  return (
    <>
    <div className="card-discover-container">

      <div className="info-cardDiscover-container">
        <p>{`${title}`}</p>
        <p>{`${infoPrice}`}</p>
        <Button type="primary"style={{
          width:'96px',
          height:'36px',
          fontSize:'14px',
          marginTop:'10px'
          }}>
            Ver mas
        </Button>
      </div>

      <div className="image-cardDiscover-container">
        <img src={`${src}`} alt={`${alt}`}  className="right-image"/>

      </div>
      
    </div>
    </>
  )
};

export {Card};