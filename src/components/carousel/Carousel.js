import React, { useState } from 'react';
import './carousel.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GeneralProductCard } from '../generalProductCard/GeneralProductCard';

const ITEMS_PER_PAGE = 5;

const CostumeCarousel = (props) => {
  const { productsGroup } = props;
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
    <div className="carousel">
      <div className="carousel-container" style={{ transform: translateValue }}>
        {productsGroup.map((item) => (
          <GeneralProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            _id={item.id}
          />
        ))}
      </div>
      <button className={`${currentPage === 0 ? "hidden" : "carousel-LeftButton"}`} onClick={handlePrevPage}>
        <span className='carouselArrow-left'><AiOutlineArrowLeft /></span>
      </button>
      <button className={`${currentPage >= Math.ceil(productsGroup.length / ITEMS_PER_PAGE) - 1 ? "hidden" : "carousel-RightButton"}`} onClick={handleNextPage}>
        <span className='carouselArrow-right'><AiOutlineArrowLeft /></span>
      </button>
    </div>
  );
};

export { CostumeCarousel };
