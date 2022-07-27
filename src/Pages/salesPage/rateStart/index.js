import React from "react";

import { Rate } from 'antd';
import { Progress } from 'antd';

import './index.css';

const RateStart = () => {
  return(
    <>
      <p className="title-text-rate">Opiniones sobre Herramienta De Limpieza De Teclado, Pc, Auriculares Airpod</p>
      <div style={{display:'flex', justifyContent:'flex-start', width:'800px', padding:'40px'}}>

        <div className='start-container'>
          <p className="ratio-number">4.5</p>
          <div>
            <Rate disabled defaultValue={5} />
          </div>
          <p className="text-start-container">Promedio entre 15 Opiniones</p>
        </div>
          <div className="progress-container">
              <p className="item-flex">5 Estrellas</p> 
              <p className="item-flex">4 Estrellas</p> 
              <p className="item-flex">3 Estrellas</p> 
              <p className="item-flex">2 Estrellas</p> 
              <p className="item-flex">1 Estrellas</p> 
          </div>
          <div   style={{ width: 300,}}>
              <Progress percent={30} size="small" className="progress-item-space" />
              <Progress percent={50} size="small" className="progress-item-space" />
              <Progress percent={70} size="small" className="progress-item-space" />
              <Progress percent={99} size="small" className="progress-item-space"/>
              <Progress percent={99} size="small" className="progress-item-space" />
          </div>

      </div>



    </>
  )
};

export {RateStart};