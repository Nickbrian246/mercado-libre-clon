import React from "react";

import { Button } from 'antd';

const SubscribeButton = () => {

  return(
  <>
  <div style={{
    width:'1230px', 
    height:'80px',
    display:'flex',
    justifyContent:'end',
    alignItems:'center',
    borderTop:'1px solid #efefef'
    }}>
  <Button
  style={{
    marginRight:'30px',
    borderRadius:'10px',
  }}
    type="primary"
    size="large"
    >
      Suscribirse
    </Button>
  </div>
  </>
  )
};


export {SubscribeButton};