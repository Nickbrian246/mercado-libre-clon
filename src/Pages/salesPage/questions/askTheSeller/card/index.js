import React from "react";

import { CardAnswer } from "./CardAnswer";
import { useSelector} from 'react-redux';

import './index.css';



const CardComments = () => {
  const data = useSelector((state) => state.salesCommentsInformation.comments)


  return(
    <>

    <div className="item-Answers-container">

    {data.map((data) => (
      <CardAnswer data= {data} key= {data.id}/>
    ))}
    </div>

    </>
  )
};

export {CardComments}