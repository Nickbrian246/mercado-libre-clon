import { useSelector } from "react-redux";
import { CardToShopping } from "./components/CardToShopping";

const ModalToShopping = () => {
  const cartproduct= useSelector((state)=> state.addCard.addCard);



  return (
    <>
      <div style={{
        width: '400px',
        height: '400px',
        overflow: 'scroll',
        background: 'white',
        border: '1px solid gray',
        boxShadow: '-5px 2px 5px -2px rgba(0,0,0,0.63)',
        zIndex:'100',
        position:'absolute',
        right:'-60px'
      }}>
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