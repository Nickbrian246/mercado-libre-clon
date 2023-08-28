import styles from "./emptyResumeShopping.module.css"
const EmptyResumeShopping = () => {
    return(
    <>
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p>Resumen de compra</p>
            </div>
            <div className={styles.subTitleContainer}>
                <p>Aquí verás los importes de tu compra una vez que agregues productos.</p>
            </div>
        </div>
    </>
    )
}

export {EmptyResumeShopping}