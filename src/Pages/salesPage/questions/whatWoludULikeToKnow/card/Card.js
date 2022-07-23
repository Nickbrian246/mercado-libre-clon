import React from "react";

import './card.css';

const Card = (props) => {
const { content} = props.data;
  return (
    <>
      <div className="what-would-uLike-container">
        <p className="text-card-container">{`${content}`}</p>
      </div>
    </>
  )
};

export {Card};