import './cardToShopping.css';
import { BsTrashFill } from 'react-icons/bs';
import { VscArrowSmallLeft, VscArrowSmallRight } from 'react-icons/vsc';


const CardToShopping = (props) => {
  const {
    price,
    image,
    _id,
    description,
    name,
  } = props.data;

  return (
    <>
      <div className='card-Shoppingcard-Container'>
        <div className='picture-shoppingCard-container'>
          <picture className='picture'>
            <img src={image} alt='product images' />
          </picture>

        </div>
        <div className='description-choppingCard-container'>
          <p>{name}</p>
        </div>
        <div className='price-shoppingCard-container'>
          <p>${price}</p>
        </div>
        <div className='counter-container'>
          <p>cantidad</p>
          <div className='quantity-container'>
            <VscArrowSmallLeft className='arrow-left' />
            <p className='quantity'>1</p>
            <VscArrowSmallRight className='arrow-right' />
          </div>

        </div>
        <div className='icon-container'>
          <BsTrashFill className='trash-icon' />
        </div>
      </div>
    </>
  )
};

export { CardToShopping }