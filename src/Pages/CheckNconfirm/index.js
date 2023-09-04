import React from "react";

import {Col, Row} from 'antd';
import { HeaderPayPage } from "../payPage/HeaderPayPage";
import { ProductInformationCheckNConfirm } from "./CheckNconfirmProducInformation/ProducInformationCheck";
import { CardCheckNConfirm } from "./card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductWithId } from "../../services";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ShowProductCart } from "./showProductCard/ShowProrductCart";
import {GiPositionMarker} from "react-icons/gi";
import { FooterInformation } from "../Main/footer/footerInformation/FooterInformation";
import { FooterUserInfo } from "../Main/footer/footerInformation/footerUserInfo/FooterUserinfo";

const CheckAndConfirm = () => {
  const {productId} = useParams()
  const [productSelected, setProductSelected] = useState({})
  const [isProductsFromCart, setIsProdcutsFromCart] = useState(false)
  const [totalCartItems, setTotalCartItems] = useState(0)
  const [howManyProductsInCart, setHowManyProductsInCart] = useState(0)
  const [groupOfProductsInCart, setGroupOfProductsInCart] = useState([])
  const shoppingCartItems = useSelector((state) => state.productsFromCart.groupOfProducts)
  
  useEffect(()=> {
    if(productId!=="shoppingCartItems"){
      setIsProdcutsFromCart(false)
      fetchProductWithId(productId)
      .then((res) => setProductSelected(res) )
      .catch((err) => {console.log(err);})
    }else {
      const {
          total,
          totalProductsItemsInCart,
          groupOfCartProducts

        } = shoppingCartItems;
      setIsProdcutsFromCart(true);
      setHowManyProductsInCart(totalProductsItemsInCart)
      setTotalCartItems(total);
      setGroupOfProductsInCart(groupOfCartProducts
        )

    }
  },[])

  const {
    title,
    price,
    image,
    id
  } = productSelected

  let status = Math.random() > 0.5
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

  <Row justify="center"  align="middle" gutter={[0,0]}>

  <Col span={[16] } style={{padding:'200px', paddingTop:"80px"}}>
    <CardCheckNConfirm 
    price = {price}
    isProductsFromCart = {isProductsFromCart}
    />

  </Col>

  <Col
  style={{
          background: '#f5f5f5',
          width: '400px',
          height: '800px',
          marginTop:'0px',
        }}
  >
    <ProductInformationCheckNConfirm
    image = {image}
    price = {price}
    title = {title}
    id = {id}
    status = {status}
    isProductsFromCart = {isProductsFromCart}
    totalCartItems = {totalCartItems}
    howManyProductsInCart = {howManyProductsInCart}
    groupOfProductsInCart = {groupOfProductsInCart}

    />
  </Col>
  </Row>
  <Row  justify="start" style={{paddingLeft:"15%"}}>
    <Col  >
        {isProductsFromCart && (
          <>
              <h2 style={{fontSize:'26px', fontWeight:'bold'}}>Elige cuándo llega tu compra </h2>
              <p><span style={{fontSize:`16px`}}><GiPositionMarker/></span>random street</p>
          </>
        )}
    {groupOfProductsInCart.map((product) => (
          <ShowProductCart
          img ={product.image}
          isFreeShipping = {true}
          id = {product.id}
          />
      ))}
    </Col>

  </Row>
  <Row justify="center" style={{background:"#ffff", marginTop:"100px"}}>
    <Col>
      <FooterUserInfo/>
    </Col>
  </Row>
    </>
  )
};

export {CheckAndConfirm}
