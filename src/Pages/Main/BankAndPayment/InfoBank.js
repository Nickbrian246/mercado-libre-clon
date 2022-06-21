import React from "react";


const InfoBank = () => {


  return (
    <>
    <div style={{width:'692px',
    height:'90px',
    display:'flex',
    justifyContent:'space-between',
    background:'white', 
    padding:'3px',
    borderRight:'2px solid  #ebebeb'
    }}>
    <div style={{width:'298px'}}>
      <p style={{fontSize:'18px'}}> Hasta 3 meses sin intereses con:</p>
      <p  style={{fontSize:'14px', color:'#999'}}>ver condiciones</p>
    </div>
    <div style={{width:'392px'}}>
      <img  style = {{width:'118px', margin:'25px 0px 20px 90px'}}src="https://disfrutaveracruz.mx/wp-content/uploads/2018/09/CITIBANAMEX-1024x158.png" alt="citibanamex "/>
    </div>

    </div>
    </>
  )
};

export {InfoBank};