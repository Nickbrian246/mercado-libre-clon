import React, { useEffect, useState } from "react";


// libreria antd***************************************************
import { Row, Col, Button } from "antd";

// ***************************************************

//Components ******************************************************
import { HeaderPayPage } from "./HeaderPayPage";
import { BankCards } from "./backCards";
import { ProductInformation } from "./productInformation";
//******************************************************************** */

// React Router ¨****************************************************//
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//******************************************************************* */

// Utils ¨****************************************************//
import { fetchProductWithId } from "../../services";
//******************************************************************* */



const PayPage = () => {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [productSelected, setProductSelected] = useState({})
  const {productId} = useParams()
  useEffect(()=>{
    if(productId){
      fetchProductWithId(productId)
      .then(res => setProductSelected(res) )
      .catch((err) => {console.log(err);})
    }
  },[])

  const {
    image,
    title,
    id,
    description, 
    price
  } = productSelected
let status = Math.random() > 0.5

  return (
    <>
      <Row style={{ height: '80px', background: '#fff159', }} justify='center' align="middle">
        
        <Col style={{ width: '800px' }}>
          <HeaderPayPage />
        </Col>

      </Row>

      <Row justify='center' align="middle">

        <Row style={{ width: '800px' }}>

          <Col span={24}>
            <p
              style={{
                marginTop: '40px',
                fontSize: '18px',
              }}>
              ¿Como quieres pagar?
            </p>
          </Col>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '5px',
              }}>
              <p
                style={{
                  marginTop: '40px',
                  fontSize: '18px',
                }}>
                Con Mercado Pago
              </p>
              <img
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '100%',
                  margin: '0px',
                }}
                src="https://pbs.twimg.com/profile_images/1609933607006519297/JfQLdV9q_400x400.jpg"
                alt=" logo paymente mercado pago"
              />
            </div>
          </Col>

          <Col span={24}>
            <BankCards setIsCardSelected={setIsCardSelected}/>
          
          </Col>


          <Col style={{ marginTop: '80px', marginBottom: '50px' }} span={24}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            { isCardSelected 
              ?  
            <Button
                Button
                type="primary"
                size="large"
                style={{ marginRight: '48px',}}
              >
                <Link to={`/checkAndConfirm/${id}`}>Continuar</Link>
            </Button> 
              :
            <Button
              Button
              type="primary"
              disabled
              size="large"
              style={{ marginRight: '48px' }}
              
            >
            <Link to={`/checkAndConfirm/${id}`}>Continuar</Link>
            </Button> }

            </div>
          </Col>

        </Row>

        <Row style={{
          background: '#f5f5f5',
          width: '400px',
          height: '800px',
          marginTop: '-278px',
        }}>
          <Col>
            <ProductInformation
            image = {image}
            price = {price}
            title = {title}
            status = {status}
            />
          </Col>

        </Row>
      </Row>

    </>
  )
};

export { PayPage };
