import React, { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import InfiniteCarousel from './components/InfinteCarousel/InfinteCarousel';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Carousel app</h3>
      <div className="carousel-app__navtap">
        <ul>
          <li onClick={() => setPage(0)}>simple Carousel</li>
          <li onClick={() => setPage(1)}>infinte Carousel</li>
        </ul>
      </div>
      {page === 0 ? (
        <Carousel infinite>
          <img src="img/1.jpg" alt="profile" />
          <img src="img/2.jpg" alt="profile" />
          <img src="img/3.jpg" alt="profile" />
          <img src="img/4.jpg" alt="profile" />
          <img src="img/5.jpg" alt="profile" />
          <img src="img/6.jpg" alt="profile" />
          <img src="img/7.jpg" alt="profile" />
          <img src="img/8.jpg" alt="profile" />
          <img src="img/9.jpg" alt="profile" />
          <img src="img/10.jpg" alt="profile" />
          <img src="img/11.jpg" alt="profile" />
          <img src="img/12.jpg" alt="profile" />
          <img src="img/13.jpg" alt="profile" />
          <img src="img/14.jpg" alt="profile" />
        </Carousel>
      ) : (
        <div>
          <InfiniteCarousel>
            <img src="img/1.jpg" alt="profile" style={{ width: '100%', height: '100%' }} />
            <img src="img/2.jpg" alt="profile" style={{ width: '100%', height: '100%' }} />
            <img src="img/3.jpg" alt="profile" style={{ width: '100%', height: '100%' }} />
            <img src="img/4.jpg" alt="profile" style={{ width: '100%', height: '100%' }} />
            <img src="img/5.jpg" alt="profile" style={{ width: '100%', height: '100%' }} />
          </InfiniteCarousel>
        </div>
      )}
    </div>
  );
}

export default App;
