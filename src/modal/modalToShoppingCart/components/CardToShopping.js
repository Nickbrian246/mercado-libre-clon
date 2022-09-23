import './cardToShopping.css';

const CardToShopping= (props) => {
  const {
  price,
  image,
  _id,
  description,
  name,
}= props.data;

  return (
    <>
    <div className='card-Shoppingcard-Container'>
      <div  className='picture-shoppingCard-container'> 
        <picture className='picture'>
          <img src={image} alt='product images'/>
        </picture>

      </div>
      <div className='description-choppingCard-container'>
        <p>{name}</p>
      </div>
      <div className='price-shoppingCard-container'>
        <p>{price}</p>
      </div>
    </div>
    </>
  )
};

export {CardToShopping}