import productInformationStyles from './productInformation.module.css'

const ProductInformation = (props) => {
    const {
        title,
        image,
        id
    } = props
    return (
        <>
        <div className={productInformationStyles.container}>
            <img alt={`product ${title}`} src ={image} className={productInformationStyles.productImg}/>
            <p className={productInformationStyles.productTitle}>{title}</p>
            <p className={productInformationStyles.succesConfirmationSpan}>tu pedido se proceso con exito !!! </p>
            
        </div>
        
        </>
    )
}

export {ProductInformation}