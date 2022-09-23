import { useSelector } from "react-redux";
import { CardToShopping } from "./components/CardToShopping";
import { Button } from "antd";

const ModalToShopping = () => {
  const cartproduct= useSelector((state)=> state.addCard.addCard);



  return (
    <>
      <div style={{
        width: '425px',
        height: '400px',
        padding:'10px',
        background: 'white',
        border: '1px solid gray',
        boxShadow: '-5px 2px 5px -2px rgba(0,0,0,0.63)',
        zIndex:'100',
        position:'absolute',
        right:'-60px',
        overflow:'auto'
      }}>
        <div style={{margin:'5px'}}>
        <Button type="primary" >ir al carrito</Button>
        </div>
        
        {
          cartproduct.map((data) => (
            <CardToShopping data={data} key={data._id} />
          ))
        }

      </div>
    </>
  )
};

export { ModalToShopping };