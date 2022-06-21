import React from "react";

import { Row,Col } from "antd";

import { Header } from "./header";
import { CarouselSlider } from "./Corousel";
import { BanckAndPayment } from "./BankAndPayment";


const MainPage = () => {


  return (
    <>
    <Row style={{height:'100px',background:'#fff159', }} justify='center'>
    <Col>
      <Header/>
    </Col>

    </Row>

    <Row  justify="center">
    <Col  style={{width:'1600px'}}>
      <CarouselSlider/>
    </Col>

    </Row>

    <Row style={{marginTop:'30px'}}  justify="center">
    <Col >
      <BanckAndPayment/>
    </Col>

    </Row>
    
    </>
  )
};


export {MainPage};