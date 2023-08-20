// modalConfirmBuy.jsx
import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import modalStyles from './modalConfirmBuy.module.css';

const ModalConfirmBuy = (props) => {
  const [animation, setAnimation] = useState(false);
  const [almostText, setAlmost] = useState(false);
  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  const { title, image } = props;
  useEffect(() => {
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

  return (
    <>
      <section className={modalStyles.ModalContainer}>
        <div className={modalStyles.productModalInformationContainer}>
          <img src={image} alt="imagen del producto" className={modalStyles.imageStyle} />
          <p className={modalStyles.ProductTitle}>{title}</p>
        </div>
        <div className={modalStyles.ProgressSection}>
          {isAnimationFinish ?  <p className={modalStyles.statustextInfo}>Su compra esta lista!!!</p>:<p className={modalStyles.statustextInfo}>En proceso ... <span className={modalStyles.dots}></span></p>}

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
