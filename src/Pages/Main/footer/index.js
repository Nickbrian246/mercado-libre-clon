import { FooterInformation } from "./footerInformation/FooterInformation";
import { CollabsableFooterNav } from "./footerInformation/collapsableNav/collapsableNav";
import { FooterUserInfo } from "./footerInformation/footerUserInfo/FooterUserinfo";
const Footer = ()=> {
    return (
    <>
    <footer style={{
        display:"flex",
        flexDirection:"column",
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        }}>
        <FooterInformation/>
        <CollabsableFooterNav/>
        <FooterUserInfo/>
    </footer>
    </>
    )
}
export {Footer}