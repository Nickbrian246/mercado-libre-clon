import React from "react";

import { Radio } from 'antd';
import './BankcardStyles.css';


const CardBank= (props)=> {
 const {_id,accountNumber, status} = props.data;

  return(
    <>
    <div className='cardBank-container'>
        <Radio value={_id}>
          <div style={{width:'100%'}}>
          <picture className="bank-picture">
            <img className="image-bank" src="https://scontent.fmex44-1.fna.fbcdn.net/v/t1.6435-9/120970610_3922792047752053_3814656062833102864_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGxo7vTfg5dld-FgmzoYh5ycT0gREYqj6RxPSBERiqPpOU1uriV6Cjhtg2mdTs-WeLJjUAg5ugRg4AMu_kWkC3Q&_nc_ohc=TAuWB6H-vQoAX_czKL8&_nc_ht=scontent.fmex44-1.fna&oh=00_AT-LwlsCjQuuufLC7wytiDPrX1d1h0A3V56LxMtERl1xsg&oe=6324408C" alt="bank"/>

          </picture>
          <div className="bank-name-container">
            <p>bancomer</p>
            <p>****{`${accountNumber}`}</p>

          </div>
          </div>
      </Radio>


    </div>

    
    </>
  )
};

export {CardBank};