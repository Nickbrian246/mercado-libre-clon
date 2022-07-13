import React from "react";


const WarrantyBack = () => {

  return (
    <>
    <div style={{
      width:'350px',
      height:'195px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'space-around',
      padding:'32px 16px',
      borderBottom:'1px solid #e5e5e5 '
      }} >


      <div>
        <p style={{
          color:'rgba(0,0,0,.9)',
          fontSize:'18px',
          fontWeight:'400',
          marginBottom:'28px',
          width:'100´%'
        }}>Devlución gratis</p>
      </div>

      <div>
        <p style={{
          fontWeight:'400',
          color:'rgba(0,0,0,.55)',
          margin:'0'

        }}>Tienes 30 días desde que recibes el producto para devolverlo. ¡No importa el motivo!</p>

      </div>

      <div style={{
        marginTop:'24px',
      }}>
        <p style={{
          color:'blue',
        }}> Conocer más sobre devoluciones</p>
      </div>
    </div>
    </>
  )
};

export {WarrantyBack};