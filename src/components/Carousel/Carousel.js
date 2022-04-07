import React from 'react';
import classes from './Carousel.module.css';

const Carousel = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.LeftArrow}>❮</div>
        <div className={classes.DisplayFrame}></div>
        <div className={classes.RightArrow}>❯</div>
      </div>
    </div>
  );
};

export default Carousel;
