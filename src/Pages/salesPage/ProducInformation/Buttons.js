import React from "react";

import { Button } from "antd";

const BuyNAddButtons = () => {


  return (
    <>
    <div className="btns-constainer">
    <Button className="btn-generic" type="primary" size="large">Comprar ahora</Button>
    <Button className="btn-generic" type="primary" size="large">Agregar al carrito</Button>
      
    </div>
    </> 
    )
};

export {BuyNAddButtons};