import React from "react";
import {RiShoppingCartLine} from 'react-icons/ri';
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { Link } from "react-router-dom";

const HeaderShoppingCart = ( ) => {
  const cartproduct= useSelector((state)=> state.addCard.addCard);
  const length= cartproduct.length;

  return (
    <>
      <Link to={`/ShoppingCart`}  style={{color:"black"}}>
        <RiShoppingCartLine style={{fontSize:'18px'}} />
      </Link>
      <div style={{position:'absolute',top:'-11px', right:'11px'}}>
        {length>=1 && (
          <Badge size="small" style={{fontSize:'13px'}}
          count={length}/>
        )}

        
      </div>
    </>
  )
};


export {HeaderShoppingCart};