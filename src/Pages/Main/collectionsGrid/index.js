import React from "react";

import { GridRender } from "./grid/GridRender";
import { DiscountCard } from "./DiscountCard";

const CollectionsGrid = () => {

  return (
    <>
    <h1>Colecciones: Descuentos únicos</h1>
    <div style={{display:'flex', justifyContent:'center',gap:'10px'}}>
      <DiscountCard/>
      <GridRender/>
    </div>
    </>
  )
};

export {CollectionsGrid};