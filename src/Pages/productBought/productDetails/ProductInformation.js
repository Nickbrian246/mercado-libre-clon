import { useSelector } from 'react-redux'
import productInformationStyles from './productInformation.module.css'
import { useEffect } from 'react'
import { useState } from 'react';

const ProductInformation = (props) => {
    const {groupOfCartProducts} = useSelector((state) => state.productsFromCart.groupOfProducts);
    console.log(groupOfCartProducts,`desde la pag ginal`);
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const {
        title,
        image,
        id,
        isFromShoppingCart
    } = props
    useEffect(()=> {
        if(isFromShoppingCart){
            setPurchasedProducts(groupOfCartProducts)
        }
    },[])
    return (
        <>
        <div className={isFromShoppingCart ? productInformationStyles.containerShoppingCart :productInformationStyles.container}>
            {isFromShoppingCart 
            ?  <div className={productInformationStyles.containerShoppingCart}>
                {purchasedProducts.map((product) => (
                    <div className={productInformationStyles.productDetailsContainer}>
                        <div className={productInformationStyles.imgContainerShippingCart}>
                            <img
                                alt={`product ${title}`}
                                src ={product.image}
                                className={productInformationStyles.productImgShopping}
                            />
                        </div>
                        <p 
                            className={productInformationStyles.productTitleShipping}
                        >
                            {product.title}
                        </p>
                    </div>
                ))}
                </div> 
            :   <div> <img alt={`product ${title}`} src ={image} className={productInformationStyles.productImg}/>
                    <p className={productInformationStyles.productTitle}>{title}</p>
                    <p className={productInformationStyles.succesConfirmationSpan}>tu pedido se proceso con exito !!! </p>
                </div>
            }
            
        </div>
        
        </>
    )
}

export {ProductInformation}