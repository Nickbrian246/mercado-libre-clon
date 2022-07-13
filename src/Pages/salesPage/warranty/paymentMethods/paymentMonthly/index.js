import React from "react";
import { listpayment } from "./list/list";
import { CardPayment } from "./list/card";


const ListItemsPayment = () => {

  return (
    <>
    {listpayment.map((data) => (
      <CardPayment data = {data} key={data.id}/>
    ))}
    
    </>
  )
};

export {ListItemsPayment};