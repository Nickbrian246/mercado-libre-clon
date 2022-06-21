import React from "react";



const MorePaymentMethod = ()=> {


  return (
    <>
    <div style={{display:'flex',
    justifyContent:'space-around',
    background:'white',
    width:'270px',
    height:'90px',
    padding:'4px',
    alignItems:'center',
    borderTopRightRadius:'5px',
    borderBottomRightRadius:'5px',
    }}
    >
      <div>
        <img style={{}} src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt=" mas medios de pago button"/>
      </div>
      <div>
      <p style={{fontSize:'18px', marginBottom:'0px'}}>  Mas medios de pago</p>
      <p style={{fontSize:'14px'}}>  ver todos</p>
      </div>
    </div>
    </>
  )
};


export { MorePaymentMethod };