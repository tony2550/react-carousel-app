import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Carousel app</h3>
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
    </div>
  );
}

export default App;
