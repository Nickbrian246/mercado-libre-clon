import React from "react";

import { CardCash } from "./list/CardCash";
import { listCash } from "./list/list";
const CashList = () => {

  return (
    <>
    { listCash.map((data) => (
      <CardCash data = {data} key = {data.id}/>
    ))}
    
    </>
  )
};

export {CashList};