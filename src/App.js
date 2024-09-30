import Slider from 'react-slick';
import { useRef } from 'react';
import './App.css';
import First from './components/a/First';
import Second from './components/a2/Second';
import Third from './components/a3/Third';
import Four from './components/a4/Four';

function App() {
  const sliderRef = useRef(null); 
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };

  const handleBack = () => {
    sliderRef.current.slickPrev(); 
  };

  return (
    <div className="app">
      <div className="sliderMove">
      <Slider ref={sliderRef} {...sliderSettings}>
        <div>
          <First onNext={handleNext} />
        </div>
        <div>
          <Second onNext={handleNext} onBack={handleBack} />
        </div>
        <div>
          <Third onNext={handleNext} onBack={handleBack} />
        </div>
        <div>
          <Four onBack={handleBack} />
        </div>
      </Slider>
      </div>
    </div>
  );
}

export default App;
