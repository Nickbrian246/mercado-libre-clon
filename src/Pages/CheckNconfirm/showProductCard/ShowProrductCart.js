import  styles from "./showProducstCart.module.css";
import { Radio, Space ,Input } from "antd";
import { useState } from "react";
import { getThreeNextWeekdays } from "../../../utils/dates";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ShowProductCart = (props) => {
    const {
        img,
        isFreeShipping,
        howManyProducts,
        id,
    } = props
    const [value, setValue] = useState(1);
    const [listOfNextThreeDays, setListOfNextThreeDays] = useState([]);
    const [HowManyItems, setHowManyItems] = useState(0)
    const groupOfCartProducts = useSelector((state) =>state.addCard.addCard);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    useEffect(()=>{
        const nextThreeDays = getThreeNextWeekdays()
        setListOfNextThreeDays(nextThreeDays)
        if(groupOfCartProducts) {
            let {products} = groupOfCartProducts.find((product) => product.id === id);
            setHowManyItems(products)
        }
    },[])
    return (
        <>
        <section className={styles.container}>
            <div className={styles.shippingContainer}>
                <div className={styles.productContainer}>
                    <p>{
                        HowManyItems >1 
                        ? `Productos ${HowManyItems}`
                        : `Producto ${HowManyItems}`
                    }
                    </p>
                    <img src="https://http2.mlstatic.com/frontend-assets/buyingflow-web-cart/icons/full_large.svg" alt="productsDecoratin" />
                </div>
                <img className={styles.productImage} src = {img} alt="product  decoration"/>
                
            </div>
            <div className={styles.radioContainer}>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>{listOfNextThreeDays[0]}</Radio>
                        <Radio value={2}>{listOfNextThreeDays[1]}</Radio>
                        <Radio value={3}>{listOfNextThreeDays[2]}</Radio>
                    </Space>
                </Radio.Group>
            </div>

        </section>
        </>
    )
}

export {ShowProductCart}