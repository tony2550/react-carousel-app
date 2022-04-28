import React, { useMemo, Children } from 'react';
import classes from './InfiniteCarousel.module.css';

const InfinteCarousel = ({ children }) => {
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
        <li key={children.length + 1} className={classes.Slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={classes.Slide}>{children[0]}</li>;
  }, [children]);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>infinite</h3>
      <section className={classes.Root}>
        <ul className={classes.Container}>{slides}</ul>
      </section>
    </div>
  );
};

export default InfinteCarousel;
