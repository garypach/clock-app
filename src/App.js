import './App.css';
import HomeImage from '../src/components/HomeImage/HomeImage';
import imagedaytimemobile from './assets/mobile/bg-image-daytime.jpg';
// import imagedaytimetablet from './assets/mobile/bg-image-daytime.jpg';
// import imagedaytimedesktop from './assets/mobile/bg-image-daytime.jpg';

function App() {
  return (
    <div>
    <HomeImage image={imagedaytimemobile}/>
    </div>
    
  );
}

export default App;
