import React from "react";

import './gridCardDesign.css';

const GridCardDesign = (props) => {
const {src, alt}  = props.data;
  return (
    <>
    <div className="grid-cardDesign">
      <img src={`${src}`} alt={`${alt}`} />
    </div>
    </>
    )
};

export {GridCardDesign};