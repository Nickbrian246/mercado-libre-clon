import styles from './productShipping.module.css'
import { getCurrentDateInDDMMYYYY ,getNextFourDays} from '../utils'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createListOfNameswithComas } from '../../../utils/text';
import { useEffect, useState } from 'react';
const ProductShippingInfo = (props) => {
    const [listOfNamesWithComas,setListOfNamesWithComas] = useState([])
    const {accountNumber, description} = useSelector((state) => state.cardSelected.cardSelected)
    const {products} = useSelector((state) => state.howManyProducts);
    const {groupOfCartProducts, total} = useSelector((state) => state.productsFromCart.groupOfProducts);
    const {
        title,
        price,
        productDescription,
        id,
        isFromShoppingCart,
    } = props
useEffect(()=>{
    if(isFromShoppingCart){
        let listOfNames = createListOfNameswithComas(groupOfCartProducts);
        setListOfNamesWithComas(listOfNames)
    }
},[])

    let currentDate = getCurrentDateInDDMMYYYY()
    let deliveryDate = getNextFourDays(currentDate)[3]
    return(
        <>
        <section className={styles.cardsContainer}>
            <div className={styles.container} >
                <p>Detalles de Envío:</p>
                <div className={styles.shippingDetails}>
                    <p className={styles.title}>{`Dirección: `}<span className={styles.spanInformation}>{`calle random #23 colonia Abril`}</span> </p>
                    <p className={styles.title}> {`fecha de Compra: `}<span className={styles.spanInformation}>{`${currentDate}`}</span></p>
                    <p className={styles.title}>{`Fecha estimada de llegada: `}<span className={styles.spanInformation}>{`${deliveryDate}`}</span> </p>
                </div>


            </div>
            {isFromShoppingCart
            ?  <div className={styles.container} >
            <p>Detalles del Producto:</p>
            <div className={styles.shippingDetails}>
                {
                    groupOfCartProducts.length >1 
                    ? <p className={styles.title}>{`Nombre de los productos: `}
                        {
                            listOfNamesWithComas.map((name) =>(
                                <span key={name} className={styles.spanInformation}>{`${name}`}</span>
                            ))
                        }
                    </p>
                    : <p className={styles.title}>{`Nombre del producto: `}
                                <span  className={styles.spanInformation}>{groupOfCartProducts[0].title}</span>
                    </p>
                }
                <p className={styles.title}>{`metodo de pago seleccionado: `}<span className={styles.spanInformation}>{`${description ? description: "hooo lo sentimos no pudimos recuperar el metodo de pago seleccionado :(" }`}</span> </p>
                <p className={styles.title}>{`cantidad: `}<span className={styles.spanInformation}>{groupOfCartProducts.length }</span> </p>
                <p className={styles.title}>{`total: `}<span className={styles.spanInformation}>{`$${total}`}</span> </p>
            </div>
                </div>
        : <div className={styles.container} >
        <p>Detalles del Producto:</p>
        <div className={styles.shippingDetails}>
            <p className={styles.title}>{`nombre: `}<span className={styles.spanInformation}>{`${title}`}</span> </p>
            <p className={styles.title}> {` Descripción: `}<span className={styles.spanInformation}>{`${productDescription}`}</span></p>
            <p className={styles.title}>{`precio: `}<span className={styles.spanInformation}>{`$${price}`}</span> </p>
            <p className={styles.title}>{`metodo de pago seleccionado: `}<span className={styles.spanInformation}>{`${description ? description: "hooo lo sentimos no pudimos recuperar el metodo de pago seleccionado :(" }`}</span> </p>
            <p className={styles.title}>{`cantidad: `}<span className={styles.spanInformation}>{products }</span> </p>
            <p className={styles.title}>{`total: `}<span className={styles.spanInformation}>{`$${price*products}`}</span> </p>
        </div>
            </div>
            }

            <div className={styles.navkeepBying}>
                    <Link to="/"  replace= {true}>Seguir comprando</Link>
            </div>
        </section>

        
        </>
    )
}
export {ProductShippingInfo}