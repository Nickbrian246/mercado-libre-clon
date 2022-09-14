
import { test } from "../../../../Store/mainReducer";
import { useDispatch } from "react-redux";


// useEffect(()=> {
//   const dispatch = useDispatch();
//   const fetchProducts = async ()=> {
//     const res = await fetch('https://fakestoreapi.com/products?limit=15')
//     const data = await res.json();
//     dispatch(test(data));
//   }
//   fetchProducts()
// },[])
// const fetchProduct =  async() => {
//     const res = await fetch('https://fakestoreapi.com/products?limit=15')
//     const data = await res.json();
//     return data;

// }