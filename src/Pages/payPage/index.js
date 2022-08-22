import React from "react";


// libreria antd***************************************************
import { Row,Col } from "antd";
// ***************************************************

//Components ******************************************************
import { HeaderPayPage } from "./HeaderPayPage";
import { BankCards } from "./backCards";


//******************************************************************** */


const PayPage = () => {

  return (
    <>
    <Row style={{height:'80px',background:'#fff159', }} justify='center' align="middle">
      <Col style={{width:'800px'}}>
      <HeaderPayPage/>
      </Col>



    </Row>

    <Row justify='center' align="middle">

      <Row style={{width:'500px'}}>

        <Col  span={24}>
          <p
          style={{
            marginTop:'40px',
            fontSize:'18px',
            }}>
              ¿Como quieres pagar?
            </p>
        </Col>
        <Col span={24}>
          <div
          style={{
            display:'flex',
            justifyContent:'start',
            alignItems:'center',
            gap:'5px',
            }}>
          <p
          style={{
            marginTop:'40px',
            fontSize:'18px',
            }}>
              Con Mercado Pago
          </p>
          <img 
          style={{
            width:'50px',
            height:'50px',
            borderRadius:'100%',
            margin:'0px',
            }} 
            src="https://http2.mlstatic.com/resources/frontend/landings-mp/images/mercadopago-og.jpg"
            alt=" logo paymente mercado pago"
            />
          </div>
        </Col>

        <Col span={24}>
          <BankCards/>
        </Col>

      </Row>

      <Row style={{background:'green', width:'300px'}}>
      <Col>
      <p>
        hollo there
      </p>
      </Col>

      </Row>

    </Row>

    </>
  )
};

export {PayPage};
