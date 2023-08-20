import React from "react";

import { Col, Row } from "antd";
import { HeaderPayPage } from "../payPage/HeaderPayPage";
import { fetchProductWithId } from "../../services";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductInformation } from "./productDetails/ProductInformation";
import { ProductShippingInfo } from "./productShippingInformation/productShipping";
import { CollabsableFooterNav } from "../Main/footer/footerInformation/collapsableNav/collapsableNav";
import { FooterUserInfo } from "../Main/footer/footerInformation/footerUserInfo/FooterUserinfo";

const ProductBought = () => {
  const [product, setProduct] = useState({})
  const {productId} = useParams()
  useEffect(()=>{

    fetchProductWithId(productId)
    .then((res) => setProduct(res))
    .catch((err) => console.log(err))
  },[])
  const {
    title,
    image,
    id,
    description,
    price
  } = product

  return (
    <>
  <Row  
  style={{height:'80px',background:'#fff159'}}
  justify='center'
  align="middle"
  >
    <Col style={{width:'800px'}}>
    <HeaderPayPage/>
    </Col>
  </Row>

  <Row style={{background:"green", height:"300px"}} justify="center"  align="middle" >
    <ProductInformation
    image = {image}
    title = {title}
    id = {id}
    />
  </Row>
  <Row style={{ height:"300px"}} justify="center"  align="middle" >
    <ProductShippingInfo
    image = {image}
    title = {title}
    price = {price}
    productDescription = {description}
    id = {id}
    />
      <CollabsableFooterNav/>
    <FooterUserInfo/>
  </Row>
  <Row   justify="center"  align="middle" >
    
  
    
  </Row>

    </>
  )
};


export {ProductBought};