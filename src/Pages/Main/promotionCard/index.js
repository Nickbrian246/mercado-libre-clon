//React *****************************************
import React from "react";
//***********************************************

//antd design librery*****************************
import { Row, Col } from "antd";
//************************************************ 

//Components ************************************
import { Title } from "./Title";
import { PromotionCards } from "./promotionCards";
import { SubscribeButton } from "./SuscribeButton";
//************************************************


const PromotionCard = () => {


  return (
    <>
  
  <Row justify="center">
    <Col>
    <Title/>
    </Col>
    <Col style={{background:'white'}}>
    <PromotionCards/>
    </Col>
    <Col style={{background:'white'}}>
    <SubscribeButton/>
    </Col>
  </Row>
    
    
    </>
  )
};


export {PromotionCard};