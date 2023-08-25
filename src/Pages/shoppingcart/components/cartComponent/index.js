import styles from "./cartItem.module.css"
import { QuantitySelector } from "../../../../components/quantitySelector";
import { useEffect, useState } from "react";

const CartItem = ( props ) => {
    const [availability, setAvailability] = useState('')
    const {
        title,
        isFull,
        productTitle,
        price,
        hasDiscount,
        howMuchDiscount,
        hasFreeShipping,
    } = props
    function getRandomNumberInRange(minimum, maximum) {
        const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        return randomNumber;
    }
    useEffect(() => {
        let  availability = getRandomNumberInRange(40, 100);
        setAvailability(availability)
    },[])
    

    return (
        <>
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    Productos
                </h2>
                <img
                className={styles.shippingFullImg}
                alt="product img"
                src="https://http2.mlstatic.com/frontend-assets/buyingflow-web-cart/icons/full_large.svg"
                />

            </div>
            <div className= {styles.productInformationContainer}>
                <div className= {styles.productdetailsContainer}>
                    <img
                    alt="decorative images"
                    src="https://http2.mlstatic.com/mesa-plegable-portafolio-plastico-180m-resistente-color-blanco-S_886697-MLU70710013662_072023-R.jpg"
                    className={styles.imageContainer}
                    />
                    <div className={styles.productDetails}>
                        <p className={styles.productTitle}>
                        Mesa Plegable Portafolio Plastico 1.80m Resistente
                        </p>
                        <div className={styles.BtnsContainer}>
                            <button className={styles.btn}>
                                    Eliminar
                            </button >
                            <button  className={styles.btn}>
                                    Guardar
                            </button>
                            <button  className={styles.btn}>
                                    Comprar ahora
                            </button>

                        </div>
                    </div>

                </div>
                <div className={styles.quantityNAvailability}>
                    <QuantitySelector/>
                    <p className={styles.quantityAvailability}>{`${availability ? availability : ""} ${availability >1 ? "disponibles" : "disponible"}`}</p>
                </div>
                <div className={styles.priceNOffer}>
                    <div className={styles.offerContainer}>
                        <p className={styles.offer}>-32%</p>
                        <p className={styles.descount}>$67,455</p>
                    </div>
                    <div className={styles.price}>
                        <p>{`$42,000`}</p>
                    </div>

                </div>
            </div>
            <div className= {styles.shippingContainer}>
                <p>
                    Envío
                </p>
                <p>
                    Gratis
                </p>

            </div>
        </section>
        
        </>
    )
};

export {CartItem}