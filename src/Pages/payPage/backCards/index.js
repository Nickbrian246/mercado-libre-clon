import React, { useEffect, useState } from "react";
/* Libreria de Antd* **************************************************************/
import { Radio } from 'antd';
/* ********************************************************************************/
/* Generate credit card*  ********************************************************/
import { generateManyCreditCards } from "../../../utils/fakerJS/fakedata";
/**********************************************************************************/

/* react redux*  ******************************************************************/
import { useDispatch, useSelector } from "react-redux";
import { setCardInformation } from "../../../Store/bankCards";
/**********************************************************************************/

/*Components* *********************************************************************/
import { CardBank } from "./card";
import { CardOtherWays } from "./card/cardOtherPaymentWays/CardOtherWays";
/**********************************************************************************/

/*Bank List* *********************************************************************/
import { bankList } from "./banckCardList/BankImagesList";
import { constantMethod } from "./banckCardList/BankImagesList";
/**********************************************************************************/

const innerJoin = ({ bankList, data, key }) => {
  
  let newArray=[];
  data.forEach((rightItem, index) => {

    newArray.push({ ...bankList[index], ...rightItem });
  })

  return newArray;
}

const BankCards = ({
  setIsCardSelected,
}) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.BankCardsSlice.BankCards);

  /**
   * de data
   *  accountNumber,
   * status,
   * id 
   */
  const onChange = (e) => {
    setValue(e.target.value)
    setIsCardSelected(true);
  }

  useEffect(() => {
    const a = generateManyCreditCards();
    dispatch(setCardInformation(a))
  }, [])

  const newArray = innerJoin({ bankList, data, key: 'description' });

  return (
    <>
      <Radio.Group value={value} onChange={onChange} style={{ width: '750px', height: '92px' }}>

        {newArray.map((data) => (
          <CardBank data={data} key={data.id}  />
        ))}
        <div style={{marginTop:'20px'}}>
          <p style={{fontSize:'16px'}}>Otras formas de  pago</p>
        </div>
        {constantMethod.map((data) => (
          <CardOtherWays data={data} key={data.id} />
        ))}

      </Radio.Group>
    </>
  )
};

export { BankCards };