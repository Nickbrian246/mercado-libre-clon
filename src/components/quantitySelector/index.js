import React, { useState , useEffect} from 'react';
import styles from './quantitySelector.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { checkInputForOnlyNumber } from './utils';

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);
    const [isZero, setIsZero] = useState(false)

    const handleForm = (e) => {
        e.preventDefault();
    };

    const handleInput = (e) => {
        let inputValue = e.target.value;
        let checkOnlyNumber = checkInputForOnlyNumber(inputValue)
        if (inputValue === "") {
            setQuantity(0);
        } else if (checkOnlyNumber) {
            setQuantity(parseInt(inputValue));
        }
    };
    const handlePlusBtn = () => {
        setQuantity((prevState) => prevState +1)
    }
    const handleMinusBtn = () => {
        setQuantity((prevState) => prevState - 1)
    }
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
                <button onClick={()=>{handlePlusBtn()}}  className={styles.btnWithoutStyles}>
                    <AiOutlinePlus />
                </button>
            </form>
        </>
    );
};

export { QuantitySelector };
