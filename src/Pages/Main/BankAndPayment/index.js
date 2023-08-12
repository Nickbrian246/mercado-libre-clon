import React from "react";

import {Col, Row} from 'antd';

import { PaySafe } from "./PaySafe";
import { InfoBank } from "./InfoBank";
import { MorePaymentMethod } from "./MorePaymentMetod";

const BanckAndPayment = () => {


  return (
    <>
    <Row>
      <Col>
        <PaySafe/>
      </Col>
      <Col>
        <InfoBank/>
      </Col>
      <Col>
        <MorePaymentMethod/>
      </Col>

    </Row>
    </>
  )
};


export {BanckAndPayment};