import React from "react";

import { Row, Col } from 'antd';

import { Logo } from "./Logo";
import { AddressButton } from "./adressButton/Adress";
import { Search } from "./Serach";
import { HorizontalVar } from "./horizontalVar";
import { PromotionsStreaming } from "./Promotion";
import { ProfileBox } from "./profileBox";
import { MyShopping } from "./MyShopping";
import { Favorites } from "./favorites/index";
import { Bell } from "./bellNotifications";
import { ShoppingCar } from "./ShoppingCar";
import { CarouselSlider } from "../Corousel";

const Header = () => {


  return (
  <>
    <Row >

    <Row align="middle">
      <Col span={15} >
          <Logo/>
      </Col>
      <Col >
          <AddressButton/>
      </Col>
    </Row>

    <Row align="middle" style={{width:'650px'}} >
    <Col span={10}>
      <Search/>
    </Col>
    <Col >
      <HorizontalVar/>
    </Col>

    </Row>

    <Row align="middle" style={{width:'450px'}} gutter={[25,0]}>
      <Col style={{marginTop:'10px'}}>
      <PromotionsStreaming/>
      </Col>
      <Col>
        <ProfileBox/>
      </Col>
      <Col>
        <MyShopping/>
      </Col>
      <Col>
        <Favorites/>
      </Col>
      <Col>
        <Bell/>
      </Col>
      <Col>
        <ShoppingCar/>
      </Col>
    </Row>

    </Row>

    {/* <Row  >
      
        <Col style={{marginLeft:'3.5%'}}>
        <CarouselSlider/>
        </Col>

  
    </Row> */}
  </>
  )
}

export {Header}