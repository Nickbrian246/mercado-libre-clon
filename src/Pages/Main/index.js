import React from "react";

// libreria antd***************************************************
import { Row,Col } from "antd";
// ***************************************************

// componentes ***************************************************
import { Header } from "./header";
import { CarouselSlider } from "./Corousel";
import { BanckAndPayment } from "./BankAndPayment";
import { CarouselComponent } from "./productsSliders/firtsSlider";
import { CarouselComponent2 } from "./productsSliders/secondSlider";
import { CarouselComponent3 } from "./productsSliders/thirdSlider";
// ****************************************************************



// // redux
// import {useDispatch} from 'react-redux';
// import { setFakeDataInformation } from "../../Store/mainReducer";
// import {useSelector} from 'react-redux'
// // 

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

    <Row style={{marginTop:'30px', }}  justify="center">
    <Col style={{width:'1340px',height:'400px'}} >
      <CarouselComponent/>
    </Col>

    </Row>

    <Row style={{marginTop:'30px', }}  justify="center">
    <Col style={{width:'1340px',height:'400px'}} >
      <CarouselComponent2/>
    </Col>

    </Row>
    <Row style={{marginTop:'30px', }}  justify="center">
    <Col style={{width:'1340px',height:'400px'}} >
      <CarouselComponent3/>
    </Col>

    </Row>
    
    </>
  )
};


export {MainPage};