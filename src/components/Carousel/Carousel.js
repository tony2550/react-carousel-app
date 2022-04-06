import React from 'react';
import classes from './Carousel.module.css';

const Carousel = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.leftArrow}>❮</div>
      <div className={classes.DisplayFrame}></div>
      <div className={classes.rightArrow}>❯</div>
    </div>
  );
};

export default Carousel;
