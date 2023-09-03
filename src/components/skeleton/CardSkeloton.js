import classes from './cardSkeleton.module.css';

const CarouselProductItemSkeleton = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <div className={classes.skeletonImage}></div>
      </div>
      <div className={classes.ProductInformationContainer}>
        <div className={classes.priceSkeleton}></div>
        <div className={classes.freeShippingContainer}>
          <div className={classes.freeShipping}></div>
          <div className={classes.lightningBolt}></div>
          <div className={classes.full}></div>
        </div>
        <div className={classes.productDescription}></div>
      </div>
    </div>
  );
};

export { CarouselProductItemSkeleton };
