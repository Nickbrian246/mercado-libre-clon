import React from "react";
import { useSelector } from "react-redux/es/exports";

import { CardNegativesQuestionsRank } from "./card/CardNegativesQuestions";

const Negatives = () => {
  const data = useSelector((state)=>  state.salesCommentsInformation.NegativesComments)

  return(
    <>
    {data.map((data)=> (
      <CardNegativesQuestionsRank data={data} key={data.id}/>
    ))}
    </>
  )
};

export {Negatives};