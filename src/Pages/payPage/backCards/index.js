import React, { useEffect, useState } from "react";
/* Libreria de Antd* **************************************************************/
import {Radio} from 'antd';
/* ********************************************************************************/
/* Generate credit card*  ********************************************************/
import { generateManyCreditCards } from "../../../utils/fakerJS/fakedata";

/**********************************************************************************/

/* react redux*  ******************************************************************/
import { useDispatch, useSelector} from "react-redux";
import { setCardInformation} from "../../../Store/bankCards";

/**********************************************************************************/

/*Components* *********************************************************************/
import { CardBank } from "./card";

/**********************************************************************************/



const BankCards = () => {
  const [value,setValue] = useState(1);
  const dispatch= useDispatch();
  const data = useSelector((state)=> state.BankCardsSlice.BankCards);

  const onChange= (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  }


  useEffect(()=> {
    const a = generateManyCreditCards();
    dispatch(setCardInformation(a))
  },[])




  return (
    <>
  <Radio.Group value={value} onChange={onChange} style={{width:'450px'}}>

  {data.map((data)=>(
    <CardBank data={data} key={data.id}/>
  ))}
  </Radio.Group>


    
    
    </>
  )
};


export {BankCards};