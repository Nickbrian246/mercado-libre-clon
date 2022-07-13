import React from "react";

//COMPONENTS************************************** */
import { ProductInformationCard } from "./ProducInformation";
import { SellerRankNInformation } from "./sellerStreak/SellerRankeNinformation";
import { WarrantyBack } from "./warranty/warrantyBack";
import { Warranty } from "./warranty/warranty";
import { PaymentMethods } from "./warranty/paymentMethods";


// ****************************************************

import { Col,Row } from "antd/lib/grid";


const SalesPage = () => {


  return (
    <>
    <Row justify="center"> 
    <Row gutter={[10,10]} style={{width:'1118px', background:'white', height:'2400px'}}>

        <Col  span={16} >
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