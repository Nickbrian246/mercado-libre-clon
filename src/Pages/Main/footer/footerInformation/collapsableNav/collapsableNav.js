import collabsableNavMenuStyles from "./collapsable.module.css";
import {IoIosArrowBack} from "react-icons/io"
import { collabsableNavFooterList } from "./collapsableNavFooterList";
import { useState } from "react";

const CollabsableFooterNav = () => {
    const [iscollapsableBtnActive, setIsCollapsableBtnActive] = useState(false)

    const handleCollapsableBtn = () =>{
        setIsCollapsableBtnActive((preState) => !preState);
    
    }
    return (
        <>
        <section className={ iscollapsableBtnActive ? collabsableNavMenuStyles.collabsableNavContainerActive :collabsableNavMenuStyles.collabsableNavContainer}>
            <button onClick={() =>{handleCollapsableBtn()}} className={
                iscollapsableBtnActive
                ? collabsableNavMenuStyles.buttonHeaderFooterNavActive
                : collabsableNavMenuStyles.buttonHeaderFooterNav
                }>
                    Más información 
                    <span className={
                        iscollapsableBtnActive
                        ?  collabsableNavMenuStyles.iconContainerActive
                        : collabsableNavMenuStyles.iconContainer
                        }>
                            <IoIosArrowBack/>
                    </span>
            </button>
            <div style={{
                display:"flex",
                width:"100%",
                justifyContent:"center",
                background:"#f7f7f7",}}>
                <div className={ iscollapsableBtnActive
                    ? collabsableNavMenuStyles.footerInformationExpandedActive
                    : collabsableNavMenuStyles.footerInformationExpanded}>
                    {collabsableNavFooterList.map((item) => (
                        <div key={item.title} style={{
                            height:"180px",
                            display:"flex",
                            flexDirection:'column',
                            justifyContent:"start",
                            }} >
                            <h2 style={{
                                marginBottom:"14px",
                                fontSize:"14px",
                                fontWeight:600,
                                color:"#333",
                                }}>{item.title}</h2>
                            <ul style={{listStyle:"none", padding:"0px"}}>
                                <li style={{color:"#999"}}>{item.children1}</li>
                                <li style={{color:"#999"}}>{item.children2}</li>
                                <li style={{color:"#999"}}>{item.children3}</li>
                                <li style={{color:"#999"}}>{item.children4}</li>
                                <li style={{color:"#999"}}>{item.children5}</li>
                                <li style={{color:"#999"}}>{item.children6}</li>
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
        </>
    )
};

export {
    CollabsableFooterNav
}