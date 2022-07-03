import React from "react";


const Title = () => {


  return (
    <>
    <div style={{
      display:'flex',
      justifyContent:'space-between',
      width:'1230px',
      background:'linear-gradient(90deg,#a90f90 55%,#0c1a51)',
      borderTopLeftRadius:'5px',
      borderTopRightRadius:'5px',
      alignItems:'center',
      height:'80px',
      padding:'16px 24px'
      
      }}>
    <div style={{
      margin:'0px 0px 0px 30px'
    }}>
      <h1 style={{
        fontSize: '26px',
        fontWeight: '600',
        lineHeight: '30px',
        color:'white'
      }}>Prueba gratis  el nivel 6</h1>
    </div>
    <div style={{
      width:'105px',
      height:'22px',
      background:'green',
      borderRadius:'10px',
      margin:'0px 30px 0px 0px'
    }}>
      <p style={{
    color: '#fff',
    margin: '0',
    padding: '8px',
    fontSize:'12px',
    fontWeight:'600',
    lineHeight:'8px',
    }}>15 DÍAS GRATIS</p>
    </div>

    </div>
    </>
  )
};


export { Title};