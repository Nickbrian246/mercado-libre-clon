import React from "react";
import { useState,useEffect } from "react";

//COMPONENTS************************************** */
import { Header } from "../Main/header";
import { CarouselComponentMain } from "../../components/carouselHomeComponent/carouselWithTitle";
import { FooterUserInfo } from "../Main/footer/footerInformation/footerUserInfo/FooterUserinfo";
import { CollabsableFooterNav } from "../Main/footer/footerInformation/collapsableNav/collapsableNav";
import { CartItem } from "./components/cartComponent";
import { EmpyCart } from "./components/empyCart";
import { EmptyResumeShopping } from "./components/empyResumeShopping";
import { ShoppingResume } from "./components/shoppingResume";
import { CartSkeleton } from "./components/cartComponent/cartSkeleton";
// ****************************************************
//**Services******************************************* */
import { fetchProductWithId } from "../../services";
import { fetchGroupOfProducts } from "../Main/services";
//******************************************************* */
//***React router************************************************* */
import { useParams, useSearchParams } from "react-router-dom";
//****************************************************************** */
//***Store************************************************* */
import { deleteItem } from "../../Store/addCard";
//****************************************************************** */
import { useDispatch } from "react-redux";


import { Col,Row } from "antd/lib/grid";
import { useSelector } from "react-redux";

const baseUrl = process.env.REACT_APP_API_KEY
const ShoppingCart = () => {
  const cartProducts = useSelector((state) =>state.addCard.addCard)
  const {productId} = useParams()
  const [groupOfProducts, setGroupOfProducts] = useState([])
  const [groupOfCartProducts, setGroupOfCartProducts] = useState({});
  const [isLoding, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  
  const skeletonArray = new Array(3).fill(".")
useEffect(()=>{
  setIsLoading(true)
  fetchGroupOfProducts()
  .then((res) => { 
    setGroupOfProducts(res)
    setIsLoading(false)
  })
  .catch(err => console.log(err))
},[productId])

useEffect(()=>{
  setIsLoading(true)
  const promises = cartProducts.map((product) => {
    return fetch(`${baseUrl}products/${product.id}`); 
  });

  Promise.all(promises)
    .then(responses => {
      return Promise.all(responses.map(response => response.json()));
    })
    .then(data => {
      setIsLoading(false)
      setGroupOfCartProducts(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[cartProducts])

  const handleDeleteItem = (id) => {
      const newGroup = groupOfCartProducts.filter((product) => product.id !== id);
      setGroupOfCartProducts(newGroup)
      dispatch(deleteItem(id))
  }
  console.log(`muestra el dolor de tu pecho`,groupOfCartProducts.length);
  return (
    <>
    <Row style={{height:'100px',background:'#fff159', }} justify='center'>
    <Col>
      <Header/>
    </Col>

    </Row>
    <Row gutter={[10,10]}  style={{marginTop:"50px"}} justify='center'>
      <Col>
        <div
        style={{
          width:"100",
          height:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"50px",
          }}>
          {(groupOfCartProducts.length >0 && !isLoding) && (groupOfCartProducts.map((product) => {
                let hasDiscount =  (Math.floor(Math.random() * 10) + 1) > 5;
                let howMuchDiscount = Math.floor(Math.random() * 80) + 1;
                return <CartItem
                      title = {product.title}
                      isFull = {true}
                      productTitle = {product.title}
                      price = {product.price }
                      hasDiscount = {hasDiscount}
                      howMuchDiscount = {howMuchDiscount}
                      hasFreeShipping = {hasDiscount}
                      image={product.image  }
                      handleDeleteItem = {handleDeleteItem}
                      id = {product.id}
                      key = {product.id}
                    /> 
              }))
          }
          {(!isLoding  && groupOfCartProducts.length === 0)&& (<EmpyCart/>)}
          {isLoding && (
            skeletonArray.map((skeleton) => {
              return <CartSkeleton/>
            })
            )
          }
        </div>
      </Col>
      <Col>
      <div style={{width:"100%",height:"500px"}}>
        {groupOfCartProducts.length > 0 
        ? <ShoppingResume groupOfCartProducts = {groupOfCartProducts}/> 
        : <EmptyResumeShopping/>}
      </div>
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