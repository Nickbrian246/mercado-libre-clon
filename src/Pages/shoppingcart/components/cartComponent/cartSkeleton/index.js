import styles from "./cartSkeleton.module.css";

const CartSkeleton = () => {

    return(
        <>
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.titleSkeleton}>
                    
                </div>

            </div>
            <div className= {styles.productInformationContainer}>
                <div className= {styles.productdetailsContainer}>
                    <div
                    className={styles.imageContainerSkeleton}
                    >
                    </div>
                    <div className={styles.productDetails}>
                        <div className={styles.productTitleSkeleton}>

                        </div>
                        <div className={styles.BtnsContainer}>
                            <button className={styles.btnSkeleotn}>
                                    
                            </button >
                            <button  className={styles.btnSkeleotn}>
                                    
                            </button>
                            <button   className={styles.btnSkeleotn}>

                            </button>

                        </div>
                    </div>

                </div>
                <div className={styles.quantityNAvailability}>
                    <div className={styles.quantitySelectorSkeleton}>

                    </div>

                </div>
                    <div className={styles.priceNOffer}>
                        <div className={styles.priceSkeleton}>

                        </div>
                
                    </div>
            </div>
            <div className= {styles.shippingContainer}>
                <div className={styles.shippingSkelton}>
                    
                </div>
                <div className={styles.shippingSkelton}>

                </div>
            </div>
        </section>
        </>
    )
}

export {CartSkeleton}