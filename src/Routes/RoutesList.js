import { SalesPage } from "../Pages/salesPage";
import { MainPage } from "../Pages/Main";
import { PayPage } from "../Pages/payPage";


const routeList = [
  {
  path:'/',
  title:'menu',
  description: 'menu inicial',
  status: true,
  element: <MainPage path= '/'/>
},
{
  path:'/producto',
  title:'producto detalles',
  description: 'detalles del producto',
  status: true,
  element: <SalesPage path= '/producto'/>
},
{
  path:'/payPage',
  title:'pagina de pago',
  description: 'details about the pay',
  status: false,
  element: <PayPage path= '/payPage'/>
},  
];


export default routeList;