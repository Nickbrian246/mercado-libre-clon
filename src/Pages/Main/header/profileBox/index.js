import React from "react";

import {BiUserCircle} from 'react-icons/bi';
import {MdKeyboardArrowDown} from 'react-icons/md';
const ProfileBox = () => {

  return (
    <>
    <div style={{display:'flex', alignContent:'flex-start'}}>

    <BiUserCircle style={{fontSize:'20px',marginTop:'9px' }}/>

    <span style={{
      fontSize:'14px',
      lineHeight:'40px'}}
      >
        Nick Brian 
        <span style={{}}>
        <MdKeyboardArrowDown
        style={{color:'rgba(0,0,0,.3)',
        fontWeight:'bold',
        fontSize:'16px',
        }}/> 
        </span>
    </span>
    
    </div>
    
    </>
  )
};


export {ProfileBox};