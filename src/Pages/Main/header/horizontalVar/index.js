import React from "react";

import { CardOption } from "./optionsToVar/Card";
import optionsList from '../horizontalVar/optionsToVar/optionsList';



const HorizontalVar = () => {

  return (
    <>
    {optionsList.map((value) => (
      <CardOption value = {value} key= {value.description}/>
    ))}
    </>
  )
};


export{HorizontalVar};