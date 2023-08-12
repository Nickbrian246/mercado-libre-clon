import React from "react";

// libreria antd***************************************************
import { Row,Col } from "antd";
// ***************************************************

// componentes ***************************************************
import { Header } from "./header";
import { CarouselSlider } from "./Corousel";
import { BanckAndPayment } from "./BankAndPayment";
import { CarouselComponent } from "./productsSliders/firtsSlider";
import { PromotionCard } from "./promotionCard";
import { BenefitsSlider } from "./benefits";
import { DiscoverCards } from "./discoverCard";
import { CollectionsGrid } from "./collectionsGrid";
import { useState, useEffect } from "react";
import { Footer } from "./footer";
// ****************************************************************
//**Services*******************************************************************
import {fetchGroupOfProducts} from './services'
 //******************************************************************
//**Utils*******************************************************************

const MainPage = () => {
  const [productsGroup,  setProductsGroup] = useState([])

  useEffect(()=> {
    fetchGroupOfProducts(15)
    .then((res) => setProductsGroup(res))
    .catch((err) => console.log(err))
  },[])

  return (
    <>
    <Row style={{height:'100px',background:'#fff159', }} justify='center'>
    <Col>
      <Header/>
    </Col>

    </Row>

    <Row  justify="center">
    <Col  style={{width:'1600px'}}>
      <CarouselSlider/>
    </Col>
    </Row>

    <Row style={{marginTop:'50px'}}  justify="center">
    <Col >
      <BanckAndPayment/>
    </Col>
    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
    <Col style={{maxWidth:'1230px',height:'400px'}} >
        {productsGroup.length > 0 && (
                <CarouselComponent
                groupOf15Products = {productsGroup}
                title ="Basado en tu última visita"
                subTitle = "Ver historial"
                isDiscount = {false}
                />
        )}
    </Col>

    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{maxWidth:'1230px',height:'400px'}} >
      {productsGroup.length > 0 && (
                <CarouselComponent
                groupOf15Products = {productsGroup}
                title ="Productos relacinados"
                subTitle = "Ver historial"
                isDiscount = {false}
                />
        )}
      </Col>

    </Row>
    

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{maxWidth:'1230px',height:'400px'}} >
      {productsGroup.length > 0 && (
                <CarouselComponent
                groupOf15Products = {productsGroup}
                title ="Productos con Envio gratis "
                subTitle = "Ver historial"
                isDiscount = {true}
                />
        )}
      </Col>
    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{width:'1340px',height:'400px'}} >
        <PromotionCard/>
      </Col>
    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{width:'1340px',height:'400px'}} >
        <BenefitsSlider/>
      </Col>
    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{width:'1340px',height:'400px'}} >
        <DiscoverCards/>
      </Col>
    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
      <Col style={{width:'1340px',height:'400px'}} >
        <CollectionsGrid/>
      </Col>
    </Row>

    <Row  justify="center" style={{background:"#ffff", marginTop:"150px",}}>
      <Col
      style={{
        width:'1600px',
        marginTop:"40px",
        display:"flex",
        justifyContent:"center",
        }}>
        <Footer/>
      </Col>
    </Row>
    
    </>
  )
};


export {MainPage};