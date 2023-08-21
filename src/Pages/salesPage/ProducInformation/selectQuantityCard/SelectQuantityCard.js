import  styles from "./selectQuantitu.module.css"
import { useDispatch } from "react-redux";
import { setHowManyProducts } from "../../../../Store/howManyProducts";
const SelectQuantityCard = (props) => {
    const dispatch = useDispatch()
    const {
        title,
        unit,
        setQuantitySelected,
        quantitySelected,
        id,
        position, 
        setPosition,
        setQuantity,
        handleOpenModalToSelectQuantity
    } = props
    let IsSelected = position === id;
    let textActiveStyles =  styles.unitSelected;
    let textNormalStyles = styles.unit;
    const handleClick = (id) =>{
        setPosition(id)
        setQuantity(`${unit} ${title}`)
        handleOpenModalToSelectQuantity()
        dispatch(setHowManyProducts(unit))
    }
    return (
        <>
        <li className={
            IsSelected 
            ? styles.containerSelected
            :styles.container
            }
            onClick={() => {handleClick(id)}}
        >
            <p className={IsSelected ?  textNormalStyles: textActiveStyles}>{unit}</p>
            <p className={IsSelected ? textNormalStyles: textActiveStyles}>{title}</p>

        </li>
        
        </>
    )
}
export {SelectQuantityCard}