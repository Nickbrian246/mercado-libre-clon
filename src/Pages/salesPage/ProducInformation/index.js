import React from "react";

//COMPONENTS ******************************************* */
import {BuyNAddButtons} from './Buttons';
import { DescriptionNCost } from "./DescriptionNCost";
import { DeliverTime } from "./DeliverTime";
import { Stock } from "./Stock";
import { ProtectedBought } from "./Protectedbought";
//****************************************************** */



const ProductInformationCard = ()=> {

  return(
    <>
    <div style={{
      width:'352px',
      height:'770px',
      padding:'24px 16px',
      borderRadius:'8px',
      border:'1px solid #e5e5e5 ',
      background:'white'}}>
      <DescriptionNCost/>
      <DeliverTime/>
      <Stock/>
      <BuyNAddButtons/>
      <ProtectedBought/>
    </div>
    </>
  )
};


export {ProductInformationCard};