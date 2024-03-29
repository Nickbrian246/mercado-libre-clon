import { SalesPage } from "../Pages/salesPage";
import { MainPage } from "../Pages/Main";
import { PayPage } from "../Pages/payPage";
import { CheckAndConfirm } from "../Pages/CheckNconfirm";
import { ProductBought } from "../Pages/productBought";
import { ShoppingCart } from "../Pages/shoppingcart";
// import { ShoppingCart } from "../Pages/Main/header/ShoppingCar";


const routeList = [
  {
  path:'/',
  title:'menu',
  description: 'menu inicial',
  status: true,
  element: <MainPage path= '/'/>
},
{
  path:'/producto/:productId',
  title:'producto detalles',
  description: 'detalles del producto',
  status: true,
  element: <SalesPage path= '/producto/:productId'/>
},
{
  path:'/payPage/:productId',
  title:'pagina de pago',
  description: 'details about the pay',
  status: false,
  element: <PayPage path= '/payPage'/>
}, 
{
  path:'/checkAndConfirm/:productId',
  title:'pagina de rivision de la compra',
  description: 'details about send and price check',
  status: false,
  element: <CheckAndConfirm path= '/checkAndConfirm'/>
}, 
{
  path:'/productDetails/:productId',
  title:'pagina de rivision de la compra',
  description: 'details about send and price check',
  status: false,
  element: <ProductBought path= '/productDetails'/>
}, 
{
  path:'/ShoppingCart',
  title:'pagina de rivision de la compra',
  description: 'details about send and price check',
  status: false,
  element: <ShoppingCart path= '/ShoppingCard'/>
}, 
];


export default routeList;