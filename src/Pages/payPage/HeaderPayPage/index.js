import React from "react";

import { Col,Row } from "antd/lib/grid";

import { NavLink } from "react-router-dom";

const HeaderPayPage = () => {


  return (
    <>
    <div>
      <Row  justify="space-between">
        <Col>
        <NavLink to='/'> <img style={{
          width:'134px',
          height:'34px'}}
          alt ='logo de mercado libre'
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png"/>
          </NavLink>
        </Col>

        <Col>
        Ayuda
        </Col>
      </Row>
    </div>
    </>
  )
};

export {HeaderPayPage};