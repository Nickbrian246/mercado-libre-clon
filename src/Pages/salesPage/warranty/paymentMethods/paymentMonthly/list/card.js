
import React from "react";

const CardPayment= (props) => {
 const {src, alt} = props.data;
  return (
    <>
    <div style={{
      width:'73px',
      height:'32px',
      }}>
      <img style={{
        width:'73px',
        height:'32px',
        }} src={`${src}`}alt= {`${alt}`}/>


    </div>
    </>
  )
};


export {CardPayment};