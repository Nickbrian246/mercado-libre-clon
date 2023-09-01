import styles from "./cartItem.module.css"
import { QuantitySelector } from "../../../../components/quantitySelector";
import { useEffect, useState } from "react";
import { calculateDiscount } from "../../utils";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProductsFromCart } from "../../../../Store/productsFromCart";
import { Link } from "react-router-dom";

const CartItem = ( props ) => {
    const [availability, setAvailability] = useState('')
    const [howMuchSaveWithDiscount, setHowMuchSaveWithDiscount] = useState(``)
    const [priceWithDiscount, setPriceWithDiscount] = useState(``);
    const [isZeroItems, setIsZeroItems] = useState(false);
    const [productsInCart, setProductsInCart] = useState(0);
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.addCard.addCard)

    const {
        title,
        isFull,
        productTitle,
        price,
        handleDeleteItem,
        hasDiscount,
        howMuchDiscount,
        hasFreeShipping,
        image,
        id
    } = props
    
    function getRandomNumberInRange(minimum, maximum) {
        const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        return randomNumber;
    }
    useEffect(() => {
        let  availability = getRandomNumberInRange(40, 100);
        setAvailability(availability)
        const { products} = cartProducts.find((product) => product.id === id);
        setProductsInCart(products)
        if(hasDiscount){
            let priceWithDiscount = calculateDiscount(howMuchDiscount,price)
            setPriceWithDiscount(priceWithDiscount)
            let howMuchSave = (price - priceWithDiscount).toFixed(2);
            setHowMuchSaveWithDiscount(howMuchSave)
            return
        }
    },[hasDiscount,howMuchDiscount,price,cartProducts,id])

    const handleBuyBtn =() => {
        dispatch(setProductsFromCart({
            hasDiscount,
            howMuchDiscount,
            price,
            id,
            productsInCart,
            title,
            image,
        }))
    }
    return (
        <>
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Productos
                </h2>
                {hasDiscount && (
                    <img
                        className={styles.shippingFullImg}
                        alt="product img"
                        src="https://http2.mlstatic.com/frontend-assets/buyingflow-web-cart/icons/full_large.svg"
                    />
                )}

            </div>
            <div className= {styles.productInformationContainer}>
                <div className= {styles.productdetailsContainer}>
                    <img
                    alt="decorative images"
                    src={image}
                    className={styles.imageContainer}
                    />
                    <div className={styles.productDetails}>
                        <p className={styles.productTitle}>
                        {productTitle}
                        </p>
                        <div className={styles.BtnsContainer}>
                            <button onClick={()=>{handleDeleteItem(id)}} className={styles.btn}>
                                    Eliminar
                            </button >
                            <button  className={styles.btn}>
                                    Guardar
                            </button>
                            <button  onClick={()=>{handleBuyBtn()}} className={styles.btn}>
                                    <Link to={`/PayPage/${id}/#top`}>Comprar ahora</Link>
                            </button>

                        </div>
                    </div>

                </div>
                <div className={styles.quantityNAvailability}>
                    <QuantitySelector
                        id = {id}
                        setIsZeroItems = {setIsZeroItems}
                    />
                    {availability < productsInCart 
                    ? (<p className={styles.alertAtLeastOneItem}>{`puedes hasta ${availability} u`}</p>)
                    :isZeroItems 
                    ? (<p className={styles.alertAtLeastOneItem}>Puedes comprar desde 1 u</p>)
                    : (<p className={styles.quantityAvailability}>
                        {`${availability ? availability : ""} ${availability >1 ? "disponibles" : "disponible"}`}
                    </p>)
                    }

                </div>
                    <div className={styles.priceNOffer}>
                        {hasDiscount && (
                            <div className={styles.offerContainer}>
                                <p className={styles.offer}>{`-${howMuchDiscount}%`}</p>
                                <p className={styles.descount}>{`$${howMuchSaveWithDiscount}`}</p>
                            </div>
                        )}
                        <div className={styles.price}>
                            {hasDiscount 
                            ? <p>{`$${(priceWithDiscount * productsInCart).toFixed(2)}`}</p>
                            : <p>{`$${(price * productsInCart).toFixed(2) }`}</p>}
                        </div>
                
                    </div>
            </div>
            <div className= {styles.shippingContainer}>
                <p>
                    Envío
                </p>
            {hasDiscount 
            ? (<p>Gratis</p>)
            : (<p>${getRandomNumberInRange(10, 100)}</p>)
        }

            </div>
        </section>
        
        </>
    )
};

export {CartItem}