import React from "react";

import { debitList } from "./list/list";
import { CardDebit } from "./list/CardDebit";
const DebitCardList = () => {

  return (
    <>
    {debitList.map((data) => (
      <CardDebit data = {data} key = {data.id}/>
    ))}

    </>
  )
};


export {DebitCardList};