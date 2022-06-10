import {BrowserRouter , Route, Routes} from 'react-router-dom';

import routeList from './RoutesList';
import { NotFound } from '../Pages/Not_Found';



const RoutesApp = () => {

  return (
<>
  <BrowserRouter>
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