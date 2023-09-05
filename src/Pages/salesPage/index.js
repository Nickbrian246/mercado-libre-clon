import React from "react";

//COMPONENTS************************************** */
import { Header } from "../Main/header";
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
import { ProductViewer } from "./productViewer";
import { CarouselComponentMain } from "../../components/carouselHomeComponent/carouselWithTitle";
import { FooterUserInfo } from "../Main/footer/footerInformation/footerUserInfo/FooterUserinfo";
import { CollabsableFooterNav } from "../Main/footer/footerInformation/collapsableNav/collapsableNav";
// ****************************************************
//**Services******************************************* */
import { fetchProductWithId } from "./services";
import { fetchGroupOfProducts } from "../Main/services";
//******************************************************* */
//***React router************************************************* */
import { useParams, useSearchParams } from "react-router-dom";
//****************************************************************** */

import { Col,Row } from "antd/lib/grid";
import { useState } from "react";
import { useEffect } from "react";


const SalesPage = () => {
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


    <Row justify="center"> 
      <Row gutter={[10,10]} style={{
        width:'1218px',
        background:'white',
        height:'auto',
        paddingBottom:"50px",
        boxShadow:' 0 1px 2px 0 rgba(0,0,0,.25)',
        borderRadius:"4px",
        }}>

          <Col  span={16}>
          <Row style={{marginTop:'30px', }}  justify="center">
            <Col  >
            <ProductViewer
            images = {image}/>
            </Col>
          </Row>
          <Row style={{marginTop:'30px', }}  justify="center">
            <Col  >
            <HorizontalSlider
            groupOfProducts= {groupOfProducts}
            />
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
            <ProductInformationCard
            title = {title}
            price = {price}
            id = {id}
            />
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


export {SalesPage};