import React from "react";

import './styles.css';

/*COMPONENTES* */
import { WhatWouldULikeToKnow } from "./whatWoludULikeToKnow";
import { AskTheSeller } from "./askTheSeller";
import { CardComments } from "./askTheSeller/card";
/**************************************************/
const Questions = () => {

  return (
    <>
    <div className="question-container">
      <p className="tittle-questions-container">Preguntas y respuestas</p>
      <WhatWouldULikeToKnow/>
      <AskTheSeller />
      <div style={{marginTop:'40px'}}>
      <CardComments/>
      </div>

    </div>

    </>
  )
};

export {Questions};