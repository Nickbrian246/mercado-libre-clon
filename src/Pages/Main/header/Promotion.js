import React from "react";

import { Link } from "react-router-dom";
// import {} from '../../../assets/mercado-libre-promocion';

const PromotionsStreaming = () => {

  return (

    <>

    <Link to={'/'}>
      <img style={{
        width:'340px',
        height:'39px',
        }}
        src="https://http2.mlstatic.com/D_NQ_836635-MLA50056872549_052022-OO.webp"
        alt="promocion del mes ">
      </img>
    </Link>
    </>
  )
};

export {PromotionsStreaming};