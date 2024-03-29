import React from "react";

//*antd Libreria ************************************************* */
import { Col,Row } from "antd/lib/grid";
//* ************************************************************** */
//*Components ************************************************* */
import { VerticalProductViewer } from "./verticalProductVierwe";
//* ************************************************************** */
//***Services************************************************************* */
import { fetchProductWithId } from "../../../services";
//********************************************************************** */

const ProductViewer = (props) => {
  const {images} = props;
  return (
    <>
    <Row style={{width:'802px', height:'fit-content', overflow:'hidden'}}>
      <Col span={6} style={{padding:'40px'}}>
          <VerticalProductViewer/>
      </Col>
      <Col span={18}>
    <div style={{
    width:'100%',
    height:'100%', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

    }}>
    <img
        style={{
          maxWidth:'500px',
          maxHeight:'500px'
        }} 
        src={images} 
        alt= "product selected"/>
    </div>
      </Col>
    </Row>
    
    </>
  )
};

export {ProductViewer};