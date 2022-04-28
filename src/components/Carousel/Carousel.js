import React, { Children, useState, useEffect } from 'react';
import classes from './Carousel.module.css';

const widthSpan = 100;

const Carousel = (props) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);

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

  // 슬라이드 속도 조절
  const speedUpAnimation = () => {
    for (let i = 0; i < children.length; i++) {
      let elem = document.getElementById('carouselitem' + i);
      elem.classList.add(classes.FastAnimation);
    }
  };

  const slowDownAnimation = () => {
    for (let i = 0; i < children.length; i++) {
      let elem = document.getElementById('carouselitem' + i);
      elem.classList.remove(classes.FastAnimation);
    }
  };

  const touchStartHandler = (e) => {
    speedUpAnimation();
    setTouchStartPosition(e.targetTouches[0].clientX); // 터치한 포지션
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };

  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = document.getElementById('DisplayFrame').offsetWidth; // 프레임 전체 길이 계산 식
    const translateDistance = ((touchEndPosition - touchStartPosition) / frameWidth) * 100; // 스와이프한 거리
    translatePartialSlides(translateDistance);
    if (touched === true) {
      setSwiped(true);
    }
  };

  const touchEndHandler = (e) => {
    if (swiped) {
      slowDownAnimation();
      if (touchStartPosition - touchEndPosition > 75) {
        // 다음사진 영역이 75초과되도록 스와이프 하면~
        nextSliderHandler();
      } else if (touchStartPosition - touchEndPosition < -75) {
        // 전사진 영역이 75초과되도록 스와이프 하면~
        prevSliderHandler();
      } else {
        jumpToSliderHandler(sliderPosition);
      }
    }
    setTouched(false); // 터치해제
    setSwiped(false); // 스와이프해제
  };

  const translatePartialSlides = (toTranslate) => {
    let currentTranslation = -sliderPosition * widthSpan;
    let totalTranslation = currentTranslation + toTranslate;
    for (let i = 0; i < children.length; i++) {
      let elem = document.getElementById('carouselitem' + i);
      elem.style.transform = 'translateX(' + totalTranslation + '%)';
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

  const positionIndicators = Children.map(children, (child, index) => (
    <div
      className={sliderPosition === index ? classes.PositionIndicator.concat(` ` + classes.CurrentPosition) : classes.PositionIndicator}
      onClick={() => jumpToSliderHandler(index)}
    ></div>
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
        <div
          className={classes.DisplayFrame}
          id="DisplayFrame"
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
          onTouchEnd={(e) => touchEndHandler(e)}
        >
          {displayItems}
        </div>
        <div className={classes.RightArrow} onClick={nextClickHandler}>
          ❯
        </div>
      </div>
      <div className={classes.Navigation}>{positionIndicators}</div>
    </div>
  );
};

export default Carousel;
