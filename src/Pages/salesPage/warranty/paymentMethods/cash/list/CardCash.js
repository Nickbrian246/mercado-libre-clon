import React from "react";


const CardCash = (props) => {
 const{ src, alt} = props.data;
  return (
    <>
    <div style={{
      width:'73px',
      height:'32px',
      display:'inline-block',
      }}>
      <img style={{
        maxWidth:'100%',
        height:'32px',
        }} src= {`${src}`} alt={`${alt}`}/>
    </div>
    </>
  )
};

export {CardCash};