import stylesFooter from './footerInformation.module.css'
import {FooterInformationCard} from "./footerInformationCard"
import { footerInformatinList } from './footerInformationList'

const FooterInformation = () => {

    return(
        <>
        <section>

            <section className = {stylesFooter.footerInformationContainer}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    {footerInformatinList.map((item) => (
                        <FooterInformationCard
                        imgsrc = {item.imgsrc}
                        title = {item.title}
                        textInformation = {item.textInformation}
                        linkText = {item.linkText}
                        link = {item.link}
                        id = {item.id}
                        key = {item.id}
                        />
                    ))}
                </div>
            </section>
        </section>
        </>
    )
}

export {FooterInformation}