import React from "react";

import { Col,Row } from "antd";
import  './styles.css';


const MainCharacteristics =  ()=>  {


  return (
    <>
    <div className="characteristic-container">
      <p  className="title">Caracteristicas principales</p>

      <div className="brandNModel-container">
        <Row>
          <Col span={8} >
            <div style={{
              width:'100%',
              height:'53px',
              background:'#ebebeb',
              padding:' 15px 24px 15px 16px',
              borderTopLeftRadius:'10px'
              }}>

              <p style={{fontWeight:'bold', fontSize:'16px'}}>Marca</p>
            </div>
            <div style={{
              width:'100%',
              height:'53px',
              background:'#f5f5f5',
              padding:' 15px 24px 15px 16px',
              borderBottomLeftRadius:'10px'
              }}>

              <p style={{fontWeight:'bold', fontSize:'16px'}}>Modelo</p>
            </div>
          
          </Col>
          <Col span={16}>
          <div style={{
              width:'100%',
              height:'53px',
              background:'#f5f5f5',
              padding:' 15px 24px 15px 16px',
              borderTopRightRadius:'10px'
              }}>

              <p style={{ fontSize:'16px'}}> Sennheiser</p>
            </div>

            <div style={{
              width:'100%',
              height:'53px',
              background:'#ffffff',
              padding:' 15px 24px 15px 16px',
              borderRight:'1px solid #ededed',
              borderBottom: '1px solid #ededed',
              borderBottomRightRadius:'10px'
              }}>

              <p style={{ fontSize:'16px'}}> Herramienta de limpieza de teclado de auriculares 5 en 1</p>
            </div>
          
          </Col>
        

        </Row>
      </div>
      <p className="title-Characteristics" >Otras caracteristicas</p>

      <div className="kit-Container">

        <div>
          <p className="letter-syntax">
            <span className="bold">
              Tipo de Kit:
              </span>
              Limpieza del Teclado de los <br/>
              auriculares
          </p>
        </div>

        <div>
        <p className="letter-syntax">
          <span className="bold">
            Productos del kit:
            </span>
            Kit de limpieza multifuncional
        </p>
        </div>

      </div>

    </div>
    </>
  )
};


export {MainCharacteristics};