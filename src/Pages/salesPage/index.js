import React from "react";

//COMPONENTS************************************** */
import { ProductInformationCard } from "./ProducInformation";
import { SellerRankNInformation } from "./sellerStreak/SellerRankeNinformation";
import { WarrantyBack } from "./warranty/warrantyBack";
import { Warranty } from "./warranty/warranty";
import { PaymentMethods } from "./warranty/paymentMethods";
import { HorizontalSlider } from "./HorizontalSlider";
import { MainCharacteristics } from "./Maincharacteristics";
import { Description } from "./description";
import { Questions } from "./questions";
import { RateStart } from "./rateStart";
import { QuestionsRate } from "./questionsRate";



// ****************************************************

import { Col,Row } from "antd/lib/grid";


const SalesPage = () => {


  return (
    <>
    <Row justify="center"> 
    <Row gutter={[10,10]} style={{width:'1218px', background:'white', height:'3400px'}}>

        <Col  span={16} >
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <HorizontalSlider/>
          </Col>
        </Row>
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <MainCharacteristics/>
          </Col>
        </Row>
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <Description/>
          </Col>
        </Row>

        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <Questions/>
          </Col>
        </Row>
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <RateStart/>
          </Col>
        </Row>
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <QuestionsRate/>
          </Col>
        </Row>








        </Col>
        
        


        <Col span={7}>
        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <ProductInformationCard/>
          </Col>
        </Row>

        <Row style={{marginTop:'30px', }}  justify="center">
          <Col  >
          <SellerRankNInformation/>
          </Col>
        </Row>
        <Row style={{marginTop:'30px', }}  justify="center" >
          <Col >
          <div style={{
            borderRadius:'10px',
            border:'1px solid #e5e5e5',
            width:'352px'
          }}>
          <WarrantyBack/>
          <Warranty/>
          <PaymentMethods/>
          </div>
          </Col>
        </Row>

        </Col>

    </Row>
    </Row>
    
    
    </>
  )
};


export {SalesPage};