import React from "react";

import { imagesList } from "./imagesList";
import { GridCardDesign } from "./gridCardDesign";

import {Row, Col} from 'antd'
const GridRender = () => {

  return (
  <>
  <Row gutter={[15, 0]} style={{width:'800px', height:'400px'}} >
  {imagesList.map((data) => (
    <Col>
      <GridCardDesign data= {data} key={data.id}/>
    </Col>
  ))}

  </Row>

  </>

  )
};

export {GridRender}