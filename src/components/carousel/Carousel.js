import React, { useState } from 'react';
import  carouselStyles from './carousel.module.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GeneralProductCard } from '../generalProductCard/GeneralProductCard';
import { CarouselProductItemSkeleton } from '../skeleton/CardSkeloton';



const CostumeCarousel = (props) => {
  const { productsGroup, isDiscount, isfor3slices } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = isfor3slices ? 3 : 5;
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(productsGroup.length / ITEMS_PER_PAGE) - 1));
  };
  const skeletonArr = new Array(15).fill(".")

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleData = productsGroup.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  let hideNextBtn = isfor3slices ? currentPage >= Math.ceil(productsGroup.length / ITEMS_PER_PAGE) -5 : currentPage >= Math.ceil(productsGroup.length / ITEMS_PER_PAGE) - 1
  console.log((productsGroup && productsGroup?.length>1));
  const translateValue = isfor3slices ? `translateX(-${currentPage * (100 / 8)}%)` :`translateX(-${currentPage * (100 / ITEMS_PER_PAGE)}%)`
  return (
    <div className={ isfor3slices ? carouselStyles.carousel3Slices :carouselStyles.carousel}>
      {(productsGroup && productsGroup?.length>1)
      ?     <div className={
        isfor3slices
        ? carouselStyles.carouselContainerFor3Slices
        :carouselStyles.carouselContainer
        } 
        style={{
          transform: translateValue
          }}
        >
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
      :     <div className={
        isfor3slices
        ? carouselStyles.carouselContainerFor3Slices
        :carouselStyles.carouselContainer
        } 
        style={{
          transform: translateValue
          }}
        >
        {skeletonArr.map((item) => (
          <CarouselProductItemSkeleton/>
        ))}
      </div>}
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
      ${hideNextBtn
      ? carouselStyles.hidden
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
