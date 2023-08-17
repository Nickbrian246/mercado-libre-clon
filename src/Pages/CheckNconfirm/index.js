import React from "react";

import {Col, Row} from 'antd';
import { HeaderPayPage } from "../payPage/HeaderPayPage";
import { ProductInformationCheckNConfirm } from "./CheckNconfirmProducInformation/ProducInformationCheck";
import { CardCheckNConfirm } from "./card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductWithId } from "../../services";
import { useState } from "react";
const CheckAndConfirm = () => {
  const {productId} = useParams()
  const [productSelected, setProductSelected] = useState({})
  useEffect(()=> {
    fetchProductWithId(productId)
    .then((res) => setProductSelected(res) )
    .catch((err) => {console.log(err);})
  },[])

  const {
    title,
    price,
    image
  } = productSelected

  let status = Math.random() > 0.5
  return (
    <>
  <Row  style={{height:'80px',background:'#fff159', }} justify='center' align="middle">
    <Col style={{width:'800px'}}>
    <HeaderPayPage/>
    </Col>
  </Row>

  <Row justify="center"  align="middle" gutter={[0,0]}>

  <Col span={[16] } style={{padding:'200px'}}>
    <CardCheckNConfirm 
    price = {price}
    />
  </Col>

  <Col style={{
          background: '#f5f5f5',
          width: '400px',
          height: '800px',
          marginTop:'-90px'}} >
    <ProductInformationCheckNConfirm
    image = {image}
    price = {price}
    title = {title}
    status = {status}
    />
  </Col>
  
  </Row>
    </>
  )
};

export {CheckAndConfirm}
