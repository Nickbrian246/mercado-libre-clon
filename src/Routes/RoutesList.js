import { SalesPage } from "../Pages/salesPage";
import { MainPage } from "../Pages/Main";


const routeList = [
  {
  path:'/',
  title:'menu',
  description: 'menu inicial',
  element: <MainPage path= '/'/>
},
{
  path:'/producto',
  title:'producto detalles',
  description: 'detalles del producto',
  element: <SalesPage path= '/producto'/>
},
];


export default routeList;