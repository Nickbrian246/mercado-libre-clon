import React from "react";

//*antd Libreria ************************************************* */
import { Col,Row } from "antd/lib/grid";
//* ************************************************************** */
//*Components ************************************************* */
import { VerticalProductViewer } from "./verticalProductVierwe";
//* ************************************************************** */

const ProductViewer = () => {

  return (
    <>
    <Row style={{width:'802px', height:'fit-content', overflow:'hidden'}}>
      <Col span={8} style={{padding:'40px'}}>
          <VerticalProductViewer/>
      </Col>
      <Col span={16}>
      </Col>
    </Row>
    
    </>
  )
};

export {ProductViewer};