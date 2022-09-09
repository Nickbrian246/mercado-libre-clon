import React from "react";

import { Card } from "./Card";
import { cardList } from "./cardList";
import './cardContainer.css';

const DiscoverCards = () => {

  return (
    <>
    <h1 className="title-discover-outsideContainer">Descubre</h1>
  <div className="container1" >
  {cardList.map((data) => (
      <Card data = {data} key={data.key}/>
    ))}
  </div>
    </>
  )
};

export {DiscoverCards}