
import autoCompleteListStyles from './autoComplete.module.css'
import {AiOutlineClockCircle} from "react-icons/ai"

const AutoCompleteList = (props) => {

    const {
        listOfProducstCoincidencies,
        noCoincidences,
        setNoCoincidences,
    } = props
    return (
    <>
        <div className = { autoCompleteListStyles.container}>
            {listOfProducstCoincidencies.map((coincidences) => (
                <>
                    <div className={autoCompleteListStyles.productItemContainer}
                        > 
                        <span className={autoCompleteListStyles.productItemIcon}
                        ><AiOutlineClockCircle/></span>
                        <p className={autoCompleteListStyles.productTitle}>{coincidences.title}</p>

                    </div>
                </>
            ))}
            {
                ( noCoincidences && listOfProducstCoincidencies.length === 0) && (
                    <div style={{
                        display:"flex",
                        justifyContent:"start",
                        width:"100%",
                        background:"#ffff",
                        padding:"10px",
                        gap:'10px',
                        overflow:"hidden",
            
                        }}> 
                        <span style={{
                            color:"#737373",
                            fontSize:'18px'
                        }}><AiOutlineClockCircle/></span>
                        <p>No hubo coincidencias</p>

                    </div>
                )
            }

        </div>
    </>
    )

}

export {AutoCompleteList}