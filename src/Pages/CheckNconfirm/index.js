import React from "react";

import {Col, Row} from 'antd';
import { HeaderPayPage } from "../payPage/HeaderPayPage";
import { ProductInformationCheckNConfirm } from "./CheckNconfirmProducInformation/ProducInformationCheck";
import { CardCheckNConfirm } from "./card";
const CheckAndConfirm = () => {

  return (
    <>
  <Row  style={{height:'80px',background:'#fff159', }} justify='center' align="middle">
    <Col style={{width:'800px'}}>
    <HeaderPayPage/>
    </Col>
  </Row>

  <Row justify="center"  align="middle" gutter={[0,0]}>

  <Col span={[16] } style={{padding:'200px'}}>
    <CardCheckNConfirm />
  </Col>

  <Col style={{
          background: '#f5f5f5',
          width: '400px',
          height: '800px',
          marginTop:'-90px'}} >
    <ProductInformationCheckNConfirm/>
  </Col>
  
  </Row>
    </>
  )
};

export {CheckAndConfirm}
