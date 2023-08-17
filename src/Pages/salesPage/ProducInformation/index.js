import React from "react";

//COMPONENTS ******************************************* */
import {BuyNAddButtons} from './Buttons';
import { DescriptionNCost } from "./DescriptionNCost";
import { DeliverTime } from "./DeliverTime";
import { Stock } from "./Stock";
import { ProtectedBought } from "./Protectedbought";
//****************************************************** */

const ProductInformationCard = (props)=> {
const {title, price, id} = props
    let status = Math.random() > 0.5

  return(
    <>
    <div style={{
      width:'352px',
      height:'770px',
      padding:'24px 16px',
      borderRadius:'8px',
      border:'1px solid #e5e5e5 ',
      background:'white'}}>
      <DescriptionNCost
      title = {title}
      price = {price}
      status = {status}/>
      <DeliverTime />
      <Stock/>
      <BuyNAddButtons
      id = {id}
      />
      <ProtectedBought/>
    </div>
    </>
  )
};


export {ProductInformationCard};