import  styles from "./selectQuantitu.module.css"
const SelectQuantityCard = (props) => {
    const {
        title,
        unit,
        setQuantitySelected,
        quantitySelected,
        id
    } = props
    return (
        <>
        <li className={styles.container}>
            <p className={styles.unit}>1</p>
            <p className={styles.unit}>unidad</p>

        </li>
        
        </>
    )
}
export {SelectQuantityCard}