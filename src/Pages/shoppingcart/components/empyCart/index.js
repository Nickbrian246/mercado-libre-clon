import { Button } from "antd";
import styles from "./emptyCart.module.css";
import {BsBagFill} from "react-icons/bs";
import { Link } from "react-router-dom";
const EmpyCart = () => {
    return(
        <>
        <div className= {styles.contianer}>
            <div className={styles.iconContainer}>
                <span><BsBagFill/></span>
            </div>
            <div className= {styles.textContainer}>
                <p className={styles.title}>¡Empieza un carrito de compras!</p>
                <p className= {styles.subTitle}>Suma productos y consigue envío gratis.</p>
            </div>
            <div className={styles.btnContainer}>
                <Button style={{width:'300px',borderRadius:"10px",height:"50px"}} size="large" type="primary"><Link to= '/'>Descubrir productos </Link></Button>
            </div>

        </div>
        </>
    )
};

export {EmpyCart}