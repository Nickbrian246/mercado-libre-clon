import React from "react";

import { IoMdPin } from "react-icons/io";

import { Row, Col } from 'antd';


const AddressButton = () => {


  return (
    <>
    <button
    style={{width:'120px',
    padding:'8px',
    height:'50px',
    background:'#fff159',
    border:'none',
    }}>
      <Row >
        <Col flex={'10px'}>
          <span style={{
            width:'100%',
            fontSize:'20px',
            height:'100%',
            }}>
              <IoMdPin/>
          </span>
        </Col>

        <Col flex={'70px'}>
          <p style={{
            fontSize:'12px',
            margin:'0px',
            }}>
              enviar a nick
          </p>
          <p style={{
            margin:'0px',
            }}>
              Cp:86203
          </p>
        </Col>
      </Row>
    </button>
    
    </>
  )
};


export {AddressButton}