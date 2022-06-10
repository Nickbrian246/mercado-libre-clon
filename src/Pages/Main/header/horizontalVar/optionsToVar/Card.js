import React from "react";

import { Link } from "react-router-dom"; 
import './Card.css'


const CardOption = ( props) => {
  console.log(props.value.nombre,'soy props')

  return (

    <>
      <ul className="list-var-element" >
      <Link style={{color:'rgba(51,51,51,.6)',}} to={`/${props.value.path}`}>{props.value.nombre}</Link>
      </ul>
    </>
  )
};


export {CardOption};  