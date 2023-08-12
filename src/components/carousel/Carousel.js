import React, { useState } from 'react';
import  carouselStyles from './carousel.module.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GeneralProductCard } from '../generalProductCard/GeneralProductCard';

const ITEMS_PER_PAGE = 5;

const CostumeCarousel = (props) => {
  const { productsGroup, isDiscount } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(productsGroup.length / ITEMS_PER_PAGE) - 1));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleData = productsGroup.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const translateValue = `translateX(-${currentPage * (100 / ITEMS_PER_PAGE)}%)`;

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.carouselContainer} style={{ transform: translateValue }}>
        {productsGroup.map((item) => (
          <GeneralProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            _id={item.id}
            isDiscount = {isDiscount}
          />
        ))}
      </div>
      <button
      className={`
      ${currentPage === 0 
      ? carouselStyles.hidden 
      : carouselStyles.carouselLeftButton
      }`} 
      onClick={handlePrevPage}
      >
        <span className={carouselStyles.carouselArrowLeft}><AiOutlineArrowLeft /></span>
      </button>
      <button
      className={`
      ${currentPage >= Math.ceil(productsGroup.length / ITEMS_PER_PAGE) - 1
      ?carouselStyles.hidden
      : carouselStyles.carouselRightButton
    }`}
      onClick={handleNextPage}
      >
        <span className={carouselStyles.carouselArrowRight}><AiOutlineArrowLeft /></span>
      </button>
    </div>
  );
};

export { CostumeCarousel };
