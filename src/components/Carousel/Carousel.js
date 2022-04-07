import React, { Children, useState, useEffect } from 'react';
import classes from './Carousel.module.css';

const widthSpan = 100;

const Carousel = (props) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const { children, infinite } = props;

  // 왼쪽 슬라이드
  const prevSliderHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (infinite) {
      newPosition = children.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  // 오른쪽 슬라이드
  const nextSliderHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    } else if (infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const jumpToSliderHandler = (id) => {
    translateFullSlides(id);
    setSliderPosition(id);
  };

  // 5. 에서 추가함
  const prevClickHandler = () => {
    prevSliderHandler();
  };
  // 5. 에서 추가함
  const nextClickHandler = () => {
    nextSliderHandler();
  };

  const keyPressHandler = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      prevSliderHandler();
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      nextSliderHandler();
      return;
    }
    if (49 <= e.keyCode && e.keyCode <= 57) {
      const arrayPos = e.keyCode - 49;
      if (arrayPos < children.length) {
        jumpToSliderHandler(arrayPos);
      }
      return;
    }
    if (e.keyCode === 48) {
      if (children.length >= 10) jumpToSliderHandler(9);
    }
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -widthSpan * newPosition;
    for (let i = 0; i < children.length; i++) {
      let elem = document.getElementById('carouselitem' + i);
      elem.style.transform = 'translateX(' + toTranslate + '%)';
    }
  };

  const displayItems = Children.map(children, (child, index) => (
    <div className={classes.CarouselItem} id={`carouselitem` + index}>
      {child}
    </div>
  ));

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  });

  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.LeftArrow} onClick={prevClickHandler}>
          ❮
        </div>
        <div className={classes.DisplayFrame}>{displayItems}</div>
        <div className={classes.RightArrow} onClick={nextClickHandler}>
          ❯
        </div>
      </div>
    </div>
  );
};

export default Carousel;
