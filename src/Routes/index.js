import {BrowserRouter , Route, Routes} from 'react-router-dom';

import routeList from './RoutesList';

import { NotFound } from '../Pages/Not_Found';
import { Header } from '../Pages/Main/header';
import { Row, Col } from 'antd';




const RoutesApp = () => {

  return (
<>
  <BrowserRouter>
  <Row style={{height:'100px',background:'#fff159', }} justify='center'>
    <Col>
      <Header/>
    </Col>

    </Row>
    <Routes>
      {Object.values(routeList).map(({path, element , description}) => (
      <Route element= {element} path= {path} key={description}/>
      ))}
      <Route path='*' element= {<NotFound/>} />

    </Routes>
</BrowserRouter>

</>
  )
};

export  {RoutesApp}