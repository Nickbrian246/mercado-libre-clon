import { Button } from "antd"
import styles from "./shoppingResume.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFromCart } from "../../../../Store/productsFromCart";
import { Link } from "react-router-dom";

const ShoppingResume = (props) => {
    const groupOfProductsInCart = useSelector((state) => state.addCard.addCard);
    const dispatch = useDispatch()
    const {groupOfCartProducts} = props;

    const total = groupOfCartProducts.reduce((previusValue, currentValue) => {
        const currentProductId = currentValue.id;
        const {products} = groupOfProductsInCart.find((product) => product.id === currentProductId)
        const totalPrice = parseFloat(products) * parseFloat(currentValue.price)
        return previusValue + totalPrice;
    },0);

    const totalProductsItemsInCart = groupOfProductsInCart.reduce((prevValue, currentVal) => {
        return prevValue + parseFloat(currentVal.products)
    },0)

    const handleBuyBtn = () =>{
        dispatch(setProductsFromCart({
            total,
            totalProductsItemsInCart,
            groupOfCartProducts
        }))
    }

    return (
        <>
        <div className={styles.container }>
            <div className={styles.titleContainer}>
                <p>Resumen de compra</p>
            </div>
            <div className={styles.shoppingDetailsContainer}>
                <div className={styles.productsContainer}>
                    <p>{totalProductsItemsInCart > 1 ? `Productos(${totalProductsItemsInCart})`:`Producto`}</p>
                    <p>{`$${(total).toFixed(2)}`}</p>
                </div>
                <div className={styles.shippingContainer}>
                    <p>Envío</p>
                    <p>{`$65`}</p>
                </div>
                <div className={styles.totalContainer}>
                    <p>Total</p>
                    <p>{`$${(total + 65).toFixed(2)}`}</p>
                </div>
                <Button 
                style={{
                    width:"312px",
                    height:"48px",
                    borderRadius:"5px",
                    fontSize:"16px",
                    fontWeight:"600",
                }}
                onClick={()=>{handleBuyBtn()}}
                type="primary"
                >
                    <Link to={`/payPage/cartProducts/#top`}>Continuar compra</Link>
                </Button>

            </div>
        </div>
        </>
    )
}
export {ShoppingResume}