import React, { useEffect, useState } from "react";
/* Libreria de Antd* **************************************************************/
import { Radio } from 'antd';
/* ********************************************************************************/

/* Lista ******************************************************************************* */
import { constantMethod } from "../../banckCardList/BankImagesList";
/* ************************************************************************************ */

/* Componente ******************************************************************************* */
import {CardOtherWays} from './CardOtherWays';
/* ************************************************************************************ */
const BankotherCards = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  }
  return (
    <>
      <Radio.Group value={value} onChange={onChange} style={{ width: '750px', height: '92px' }}>
        {constantMethod.map((data) => (
          <CardOtherWays data={data} key={data.id} />
        ))}
      </Radio.Group>
    </>
  )
};

export { BankotherCards };