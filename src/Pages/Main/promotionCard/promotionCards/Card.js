import React from "react";


const Card = (props) => {
  const {src, description,price} = props.list;

  return (
    <>
    <div style={{
      display:'flex',
      justifyContent:'left',
      width:'283px',
      height:'74px',
      alignItems:'center',

      }}>

        <div style={{
      minWidth:'74px',
      minHeight:'74px',
      borderRadius:'50% ',
      border:'1px solid #efefef',
      background:'white',
      overflow:'hidden',
      marginRight:'16px',
      }}>

        <img style={{
        width:'100%',
        height:'auto',
        }} src= {`${src}`} alt="dysine"></img>

        </div>

        <div>
        <p style={{
          fontSize:'16px',
          lineHeight: '16px',
          marginBottom:'0px',
          
          
    }}>{`${description}`}</p>

    {(price ==='$299' && 
    <p style={{
      margin:'0px',
      display:'flex'
      }}>
        {`${price}`}
        </p>
        )}
        </div>

    </div>
    </>
  )
};

export {Card};