import React from "react";

import { Radio } from 'antd';
import './BankcardStyles.css';

import { useDispatch } from "react-redux";
import { setCardSelected } from "../../../../Store/cardSelected";


const CardBank= (props)=> {
  const dispatch = useDispatch()
const {
  accountNumber,
  description,
  src,
  status,
  _id,
} = props.data;
const handleClick = () => {

  dispatch(setCardSelected({
  accountNumber,
  description,
  src,
  status,
  _id
  }))
}


  return(
    <>
    <div className='cardBank-container' onClick={()=> {handleClick()}}>
        <Radio value={_id}>
          <div style={{width:'100%',display:'flex', justifyContent:'center', alignItems:"center"}}>
          <picture className="bank-picture">
            <div className="image-banck-container">
              <img className="image-bank" src={`${src}`} alt="bank"/>
            </div>
          </picture>
          <div className="bank-name-container">
            <p>{description}</p>
            <p>****{accountNumber}</p>

          </div>
          </div>
      </Radio>


    </div>

    
    </>
  )
};

export {CardBank};