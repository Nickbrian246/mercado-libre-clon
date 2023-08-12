import { useInfoListTitle } from "./FooterUserInfoList"
import { userInfoListText } from "./FooterUserInfoList"
import footerUserInfoStyles from "./footerUserInfo.module.css"

const FooterUserInfo = () => {
    return (
        <>
        <section className={footerUserInfoStyles.footerUserInfoContainer}>
            <div className={footerUserInfoStyles.titleContainer}>
                {useInfoListTitle.map((title) => (
                    <p key={title.title} className={footerUserInfoStyles.title}>{title.title}</p>
                ))}
            </div>
            <div className={footerUserInfoStyles.textContainer}>
            {userInfoListText.map((text) => (
                    <p key={text.text} className={footerUserInfoStyles.footerInformationText}>{text.text}</p>
                ))}
                
            </div>
        </section>
        </>
    )
}

export {FooterUserInfo}