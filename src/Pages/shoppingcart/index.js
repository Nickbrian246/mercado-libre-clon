import React from "react";
import { useState,useEffect } from "react";

//COMPONENTS************************************** */
import { Header } from "../Main/header";
import { CarouselComponentMain } from "../../components/carouselHomeComponent/carouselWithTitle";
import { FooterUserInfo } from "../Main/footer/footerInformation/footerUserInfo/FooterUserinfo";
import { CollabsableFooterNav } from "../Main/footer/footerInformation/collapsableNav/collapsableNav";
// ****************************************************
//**Services******************************************* */
import { fetchProductWithId } from "../../services";
import { fetchGroupOfProducts } from "../Main/services";
//******************************************************* */
//***React router************************************************* */
import { useParams, useSearchParams } from "react-router-dom";
//****************************************************************** */

import { Col,Row } from "antd/lib/grid";



const ShoppingCart = () => {
  const {productId} = useParams()
  const [groupOfProducts, setGroupOfProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})

useEffect(()=>{
    fetchProductWithId(productId)
    .then((res) => setProductSelected(res))
    .catch((err) => console.log(err))
},[productId])

  useEffect(()=>{
    fetchGroupOfProducts()
    .then((res) => {
      setGroupOfProducts(res)
    })
    .catch((err) => console.log(err))
  },[])

  const {image,title,price, id} = productSelected
  return (
    <>
    <Row style={{height:'100px',background:'#fff159', }} justify='center'>
    <Col>
      <Header/>
    </Col>

    </Row>


    <Row style={{marginTop:'50px'}} justify="center">
      <Col>
          <CarouselComponentMain
          title = 'Quienes vieron este producto también compraron'
          productsGroup = {groupOfProducts}
          titleStyles = {{
            fontSize:'24px',
            color:"rgba(0,0,0,.9)",
            fontWeight:'400',
            lineHeight:"1.25",
          }}
          
          />
      </Col>
    </Row>
    <Row style={{marginTop:'50px'}} justify="center">
      <Col>
          <CarouselComponentMain
          title = 'Quienes vieron este producto también compraron'
          productsGroup = {groupOfProducts}
          titleStyles = {{
            fontSize:'24px',
            color:"rgba(0,0,0,.9)",
            fontWeight:'400',
            lineHeight:"1.25",
          }}
          
          />
      </Col>
    </Row>

    <Row style={{marginTop:'50px', marginBottom:'20px'}} justify="center">
      <Col style={{width:"100%"}}>
        <CollabsableFooterNav/>
        <FooterUserInfo/>
      </Col>
    </Row>
    
    
    </>
  )
};


export {ShoppingCart};