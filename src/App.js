import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Carousel app</h3>
      <Carousel infinite>
        <img
          src="https://images.unsplash.com/photo-1594142404563-64cccaf5a10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt="profile"
        />
        <img
          src="https://images.unsplash.com/uploads/141319662617846f3b4c9/1677b57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="profile"
        />
        <img
          src="https://images.unsplash.com/photo-1602519362498-a57e90340bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="profile"
        />
        <h1 style={{ background: '#206ebd' }}>Sample h1</h1>
        <img
          src="https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="profile"
        />
        <img
          src="https://images.unsplash.com/photo-1603326530308-cf8cb7f49649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="profile"
        />
        <img
          src="https://images.unsplash.com/photo-1561389881-a5d8d5549588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="profile"
        />
      </Carousel>
    </div>
  );
}

export default App;
