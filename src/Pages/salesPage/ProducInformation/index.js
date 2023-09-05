import React, { useState } from "react";

//COMPONENTS ******************************************* */
import {BuyNAddButtons} from './Buttons';
import { DescriptionNCost } from "./DescriptionNCost";
import { DeliverTime } from "./DeliverTime";
import { Stock } from "./Stock";
import { ProtectedBought } from "./Protectedbought";
//****************************************************** */

const ProductInformationCard = (props)=> {
const {title, price, id} = props
const [isResetToDefaultValue, setIsResetToDefaultValue] =useState(false)
    let status = Math.random() > 0.5

  return(
    <>
    <div style={{
        width:'352px',
        height:'770px',
        padding:'24px 16px',
        borderRadius:'8px',
        border:'1px solid #e5e5e5 ',
        background:'white',
      }}>
      <DescriptionNCost
      title = {title}
      price = {price}
      status = {status}/>
      <DeliverTime />
      <Stock 
      isResetToDefaultValue = {isResetToDefaultValue}
      setIsResetToDefaultValue = {setIsResetToDefaultValue}
      />
      <BuyNAddButtons
      id = {id}
      setIsResetToDefaultValue = {setIsResetToDefaultValue}
      />
      <ProtectedBought/>
    </div>
    </>
  )
};


export {ProductInformationCard};