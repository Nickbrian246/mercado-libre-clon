// modalConfirmBuy.jsx
import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import modalStyles from './modalConfirmBuy.module.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalConfirmBuy = (props) => {
  const [animation, setAnimation] = useState(false);
  const [almostText, setAlmost] = useState(false);
  const [isAnimationFinish, setIsAnimationFinish] = useState(false);
  const [maxElements, setElements] = useState([])
  const {groupOfCartProducts} = useSelector((state) => state.productsFromCart.groupOfProducts);

  const navigate = useNavigate()
  const {
    title,
    image,
    id,
    isProductsFromCart,
  } = props;

  useEffect(() => {
    if(groupOfCartProducts?.length >1){
      let max5elements = groupOfCartProducts.slice(0,6);
      setElements(max5elements)
    }
    setTimeout(() => {
      setAnimation(true);
    }, 2000);
    setTimeout(() => {
      setIsAnimationFinish(true);
    }, 7000);
  }, []);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAlmost(true);
    }, 4000);

    return () => clearTimeout(animationTimeout);
  }, [animation]);
  if(isAnimationFinish) {
    setTimeout(()=>{
      if(isProductsFromCart){
        navigate(`/productDetails/cartProducts`)
        return
      }
      navigate(`/productDetails/${id}`)
    },1000)
  }
  return (
    <>
      <section className={modalStyles.ModalContainer}>
        {
          isProductsFromCart
          ? (groupOfCartProducts.length >1 
            ? <div className={modalStyles.productModalInformationContainerMoreThanOne}>
                {maxElements.map((product) => {
                  return <div className= {modalStyles.productContainerMoreThanOne}>
                          <img src={product.image} alt={`imagen del producto ${product.title}`} className={modalStyles.imageStyleMoreThanOne} />
                          <p className={modalStyles.ProductTitleMoreThanOne}>{product.title}</p>
                        </div>
                })}
              </div>
            : <div className={modalStyles.productModalInformationContainer}>
                <img src={groupOfCartProducts[0].image} alt={`imagen del producto ${groupOfCartProducts[0].title}`} className={modalStyles.imageStyle} />
                <p className={modalStyles.ProductTitle}>{groupOfCartProducts[0].title}</p>
              </div>
            )
          : <div className={modalStyles.productModalInformationContainer}>
              <img src={image} alt="imagen del producto" className={modalStyles.imageStyle} />
              <p className={modalStyles.ProductTitle}>{title}</p>
            </div>
        }
        <div className={modalStyles.ProgressSection}>
          {(isProductsFromCart && groupOfCartProducts.length > 1) && (<p>{`productos (${groupOfCartProducts.length})`}</p>)}
          {
            isAnimationFinish 
            ? <p className={modalStyles.statustextInfo}>Su compra esta lista!!!</p>
            : <p className={modalStyles.statustextInfo}>En proceso ... <span className={modalStyles.dots}></span></p>
          }

          <div className={isAnimationFinish ? `${modalStyles.progressBarContainer} ${modalStyles.active}` : modalStyles.progressBarContainer}>
            {isAnimationFinish
              ? (<span className={modalStyles.checkIconContainer}><AiOutlineCheck /></span>)
              : (
                <div
                  className={
                    animation
                      ? modalStyles.progressBarProcessAnimationActive
                      : modalStyles.progressBarProcessAnimation
                  }
                >

                </div>
              )}
            {!isAnimationFinish
              ? almostText
                ? (<p className={modalStyles.text}>Ya casi es tuyo!!!</p>)
                : (<p className={modalStyles.text}>Su compra está casi lista!!!</p>)
              : null}
          </div>

        </div>
      </section>
    </>
  );
};

export { ModalConfirmBuy };
