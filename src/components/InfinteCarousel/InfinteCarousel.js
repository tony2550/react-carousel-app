import React, { useState, useMemo, Children, useLayoutEffect, useRef, useEffect, useCallback } from 'react';
import classes from './InfiniteCarousel.module.css';

const InfinteCarousel = ({ children }) => {
  const containerRef = useRef();
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const actionHandle = useCallback(
    (mode) => {
      containerRef.current.style.transitionDuration = '450ms';
      if (mode === 'prev') {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === 'next') {
        if (current >= children.length) {
          setTranslateX(containerRef.current.clientWidth * (children.length + 1));
          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );
  // infinite scroll smooth effect
  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };
    document.addEventListener('transitionend', transitionEnd);

    return () => {
      document.removeEventListener('transitionend', transitionEnd);
    };
  }, [current, children]);

  // autoplay
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      actionHandle('next');
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandle]);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className={classes.Slide}>
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className={classes.Slide}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={classes.Slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={classes.Slide}>{children[0]}</li>;
  }, [children]);

  // position first element correctly and this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>infinite</h3>
      <section className={classes.Root}>
        <ul ref={containerRef} className={classes.Container} style={{ transform: `translate3d(${-translateX}px, 0,0)` }}>
          {slides}
        </ul>
        <button onClick={() => actionHandle('prev')} className={`${classes.Btn} ${classes.BtnLeft}`}>
          {'<'}
        </button>
        <button onClick={() => actionHandle('next')} className={`${classes.Btn} ${classes.BtnRight}`}>
          {'>'}
        </button>
      </section>
    </div>
  );
};

export default InfinteCarousel;
