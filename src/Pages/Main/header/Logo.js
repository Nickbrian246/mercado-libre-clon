import React from "react";

import { NavLink } from "react-router-dom";


const Logo = () => {


  return (
      <>
        <div>
        <NavLink to='/'> <img style={{
          width:'134px',
          height:'34px'}}
          alt ='logo de mercado libre'
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png"/>
          </NavLink>
        </div>
      </>
  );
};

export {Logo}