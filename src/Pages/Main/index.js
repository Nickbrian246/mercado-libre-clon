import React from "react";

// libreria antd***************************************************
import { Row,Col } from "antd";
// ***************************************************

// componentes ***************************************************
import { Header } from "./header";
import { CarouselSlider } from "./Corousel";
import { BanckAndPayment } from "./BankAndPayment";
import { CarouselComponent } from "./productsSliders/firtsSlider";
import { CarouselComponent2 } from "./productsSliders/secondSlider";
import { CarouselComponent3 } from "./productsSliders/thirdSlider";
import { PromotionCard } from "./promotionCard";
import { BenefitsSlider } from "./benefits";
import { DiscoverCards } from "./discoverCard";
import { CollectionsGrid } from "./collectionsGrid";
import { useSearchParams } from "react-router-dom";
import { CarouselComponentMain } from "../../components/carouselHomeComponent/carouselWithTitle";
import { useState, useEffect } from "react";
// ****************************************************************



// // redux
// import {useDispatch} from 'react-redux';
// import { setFakeDataInformation } from "../../Store/mainReducer";
// import {useSelector} from 'react-redux'
// // 
const BASE_URL = process.env.REACT_APP_API_KEY

const MainPage = () => {
  const [productsGroup,  setProductsGroup] = useState([])
  const fetchData = async () => {
    try {
      const data = await fetch(`${BASE_URL}products?limit=15`);
      const response = await data.json()
      return response
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    // const card = generateManyBooks(15);
    // setData1(card)
    fetchData().then((res) => setProductsGroup(res))
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
      <CarouselComponent/>
    </Col>

    </Row>

    <Row style={{marginTop:'50px', }}  justify="center">
    <Col style={{maxWidth:'1230px',height:'400px'}} >
      <CarouselComponentMain
      productsGroup = {productsGroup}
      title = "Recientes"
      subTitle = "como no"
      />
    </Col>

    </Row>
    

    <Row style={{marginTop:'50px', }}  justify="center">
    <Col style={{maxWidth:'1230px',height:'400px'}} >
    <CarouselComponentMain
      productsGroup = {productsGroup}
      title = "Recientes"
      />
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
    
    </>
  )
};


export {MainPage};