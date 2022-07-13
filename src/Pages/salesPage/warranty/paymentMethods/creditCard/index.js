import React from "react";

import { listCreditCard } from "./list/list";
import { CardCredit } from "./list/Card";
const CreditCardList = () => {

  return (
    <>
    {listCreditCard.map((data)=> (
      <CardCredit data={data} key={data.id}/>
    ))}
    </>
  )
};

export {CreditCardList};