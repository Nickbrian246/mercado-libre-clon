import React from "react";

import { CardPositivesQuestionsRank } from "./card.js/CardPositves";
import { useSelector } from "react-redux/es/exports";

const Positives = () => {
  const data = useSelector((state)=>  state.salesCommentsInformation.PositivesComments)

  return(
    <>
  {data.map((data)=> (
    <CardPositivesQuestionsRank data= {data} key ={data.id}/>
  ))}
    </>
  )
};

export {Positives};