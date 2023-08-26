import React, { useState , useEffect} from 'react';
import styles from './quantitySelector.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { checkInputForOnlyNumber } from './utils';
import { useDispatch } from 'react-redux';
import { addItem,substractAnElement,setItem } from '../../Store/addCard';
import { useSelector } from 'react-redux';

const QuantitySelector = (props) => {
    const {id,setIsZeroItems} = props
    const cartProducts = useSelector((state) => state.addCard.addCard)
    const [quantity, setQuantity] = useState(1);
    const [isZero, setIsZero] = useState(false)
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault();
    };

    const handleInput = (e) => {
        let inputValue = e.target.value;
        let checkOnlyNumber = checkInputForOnlyNumber(inputValue)
        if (inputValue === "") {
            setQuantity(0);
            setIsZeroItems(true)
        } else if (checkOnlyNumber) {
            setIsZeroItems(false)
            setQuantity(parseInt(inputValue));
            dispatch(setItem({id, products:parseFloat(inputValue)}))
        }
    };
    const handlePlusBtn = (id) => {
        dispatch(addItem(id))
    }
    const handleMinusBtn = () => {
        dispatch(substractAnElement(id))
    }
    useEffect(()=>{
        const {products} = cartProducts.find((product) => product.id === id);
        setQuantity(products)
    },[cartProducts, id])

    useEffect(() =>{
        if(quantity <= 1) return setIsZero(true)
        if(quantity >1) return setIsZero(false)
    },[quantity])
    return (
        <>
            <form onSubmit={handleForm} className={styles.container}>
                <button
                disabled = {isZero}
                onClick={()=>{handleMinusBtn()}}
                className={ isZero ? styles.quantityIsZero: styles.btnWithoutStyles  }>
                    <AiOutlineMinus />
                </button>
                <input
                    type="text" // 
                    className={styles.input}
                    value={quantity}
                    onChange={handleInput}
                />
                <button onClick={()=>{handlePlusBtn(id)}}  className={styles.btnWithoutStyles}>
                    <AiOutlinePlus />
                </button>
            </form>
        </>
    );
};

export { QuantitySelector };
