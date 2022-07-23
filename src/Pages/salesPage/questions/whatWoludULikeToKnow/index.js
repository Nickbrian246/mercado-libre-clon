import React from "react";

import { cardList } from "./card/cardList";
import { Card } from "./card/Card";


const WhatWouldULikeToKnow = () => {


  return (
    <>
    <div style={{
      width:'718px',
      height:'82px',
      marginTop:'40px',
      }}>
      <p  style={{
        fontWeight:'600',
        paddingBottom:'8px',
        fontSize:'18px',
        lineHeight:'1.25',
        }}>
          ¿Qué quieres saber ?
      </p>
    <div>
    {cardList.map((data) => (
        <Card data= {data} key= {data.id}/>
      ))}
    </div>

    

      

    </div>
    
    </>
  )
};

export {WhatWouldULikeToKnow};