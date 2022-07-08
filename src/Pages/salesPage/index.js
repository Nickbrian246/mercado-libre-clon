import React from "react";

//COMPONENTS************************************** */
import { ProductInformationCard } from "./ProducInformation";



// ****************************************************

import { Col,Row } from "antd/lib/grid";

const SalesPage = () => {


  return (
    <>
    <Row justify="center"> 
    <Row style={{width:'1118px', background:'white', height:'2000px'}}>

        <Row style={{marginTop:'30px', }}  justify="center">
          <Col style={{width:'1340px',height:'400px'}} >
          <ProductInformationCard/>
          </Col>
        </Row>















    </Row>
    </Row>
    
    
    </>
  )
};


export {SalesPage};