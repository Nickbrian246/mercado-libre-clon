import  styles from "./selectQuantitu.module.css"
const SelectQuantityCard = (props) => {
    const {
        title,
        unit,
        setQuantitySelected,
        quantitySelected,
        id,
        position, 
        setPosition,
        setQuantity
    } = props
    let IsSelected = position === id;
    let textActiveStyles =  styles.unitSelected;
    let textNormalStyles = styles.unit;
    const handleClick = (id) =>{
        setPosition(id)
        setQuantity(`${unit} ${title}`)
    }
    return (
        <>
        <li className={styles.container} onClick={() => {handleClick(id)}}>
            <p className={IsSelected ?  textNormalStyles: textActiveStyles}>{unit}</p>
            <p className={IsSelected ? textNormalStyles: textActiveStyles}>{title}</p>

        </li>
        
        </>
    )
}
export {SelectQuantityCard}