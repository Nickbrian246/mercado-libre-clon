import React from "react";


const PaySafe = () => {


  return (
    <>
    <div
    style={{
      display:'flex',
      justifyContent:'space-around',
      width:'223px',
      height:'90px', 
      padding:'8px',
      background:'white',
      borderRight:'2px solid #ebebeb',
      borderTopLeftRadius:'5px',
      borderBottomLeftRadius:'5px',
      }}>

    <div
    style={{
      width:'5px',
      background:'#3483fa',
      }}>
      <p></p>
    </div>

      <div>
        <p
        style={{
          fontSize:'18px',
          marginBottom:'1px',
          }}>
            Paga cómodo y seguro
        </p>
        <p
        style={{
          color:'#999',
          fontSize:'14px',
          marginTop:'-1'}}
          >
            con Mercado Pago
        </p>
      </div>
      
    </div>
    </>
  )
};


export {PaySafe};