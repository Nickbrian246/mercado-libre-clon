import stylesFooter from "./footerInformation.module.css"
const FooterInformationCard = (props) =>{
    const {
        imgsrc,
        title,
        textInformation,
        link,
        linkText,
        id
    } = props 
    return(
    <>
        <div className = {`${id %2  ===0  ? stylesFooter.choosePaymentDivider  : stylesFooter.choosePayment}`}>
            <div className = {stylesFooter.IconContianer}>
                        <span>
                            <img src= {imgsrc} />
                        </span> 
            </div>
            <div className={ stylesFooter.textContainer}>
                        <h2 style={{textAlign:"center", marginTop:"16px"}}>{title}</h2>
                        <p 
                        className={stylesFooter.textInformation}
                        >
                            {textInformation}
                        </p>
                        <p
                        title="este enlace no esta disponible" 
                        className={stylesFooter.link}>{linkText}</p>
            </div>
        </div>
    </>
    )
}
export {FooterInformationCard}