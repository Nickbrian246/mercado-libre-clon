import React from "react";

import {MdKeyboardArrowDown} from 'react-icons/md';

const Favorites = ( ) => {

  return (
    <>
      <span>Favoritos
        <MdKeyboardArrowDown style={{
          color:'rgba(0,0,0,.3)',
          fontWeight:'bold',
          fontSize:'16px',
          margin:'0',
          }}/>
      </span>
    
    </>
  )
};

export {Favorites};