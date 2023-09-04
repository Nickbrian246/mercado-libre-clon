import { useSelector } from 'react-redux'
import productInformationStyles from './productInformation.module.css'


const ProductInformation = (props) => {
    const {
        title,
        image,
        id,
        isFromShoppingCart
    } = props
    const {groupOfCartProducts} = useSelector((state) => state.productsFromCart.groupOfProducts);
    // const [groupOfCartProducts, setPurchasedProducts] = useState([]);
    // useEffect(()=> {
    //     // if(isFromShoppingCart){
    //     //     console.log(`entrando`);
    //     //     setPurchasedProducts(groupOfCartProducts)
    //     // }
    // },[isFromShoppingCart])
    return (
        <>
        <div className={isFromShoppingCart ? productInformationStyles.containerShoppingCart :productInformationStyles.container}>
            {isFromShoppingCart 
            ? (groupOfCartProducts.length >1 
                ?  <div className={productInformationStyles.containerShoppingCart}>
                    {groupOfCartProducts.map((product) => (
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
                    : <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
                        <div className={productInformationStyles.productImgContainer}>
                        <img
                            alt={`product ${title}`}
                            src ={groupOfCartProducts[0].image}
                            className={productInformationStyles.productImg}
                        />
                        </div>
                        <p className={productInformationStyles.productTitle}>{groupOfCartProducts[0].title}</p>
                        <p className={productInformationStyles.succesConfirmationSpan}>tu pedido se proceso con exito !!! </p>
                        </div>
                    )
            :   <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
                    <div className={productInformationStyles.productImgContainer}>
                    <img
                        alt={`product ${title}`}
                        src ={image}
                        className={productInformationStyles.productImg}
                    />
                    </div>
                    <p className={productInformationStyles.productTitle}>{title}</p>
                    <p className={productInformationStyles.succesConfirmationSpan}>tu pedido se proceso con exito !!! </p>
                </div>
            }
            
        </div>
        
        </>
    )
}

export {ProductInformation}