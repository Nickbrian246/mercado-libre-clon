import React from "react";

import { Radio } from 'antd';
import './cardOtherWays.css';

import { AiFillBank } from 'react-icons/ai';

import { useDispatch } from "react-redux";
import { setCardSelected } from "../../../../../Store/cardSelected";


const CardOtherWays = (props) => {
  const dispatch = useDispatch();
  const {
    description,
    children,
    status,
    id
  } = props.data;

  const handleClick = () => {
    dispatch(setCardSelected({
      description,
      children,
      status,
      id
    }))
    
  }

  return (
    <> 
  
      <div className='cardBank-container' onClick={()=>{handleClick()}}>
        <Radio value={id}>
          <div style={{ width: '100%' }}>
            <AiFillBank style={{ fontSize: '20px', marginRight: '5px' }} />

            <div className="bank-name-container">
              <p style={{ margin: '0px' }}>{description}</p>
              {status === true && (
                <p style={{ fontSize: '10px', margin: '0px' }}>{children}</p>
              )}
            </div>

          </div>
        </Radio>

      </div>

    </>
  )
};

export { CardOtherWays };