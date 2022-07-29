import React from "react";

import { CardAllQuestionsRank } from "./card/CardAllQuestionsRank";

import { useSelector } from "react-redux";

const AllQuestions = () => {
  const data = useSelector((state)=>  state.salesCommentsInformation.AllComments);
  

  return(
    <>
    
    {data.map((data) => (
      <CardAllQuestionsRank data={data} key ={data.id}/>
    ))}
    
    
    </>
  )
};

export {AllQuestions};