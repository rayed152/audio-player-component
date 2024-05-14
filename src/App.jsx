import "./App.css";
import Audio from "./component/Audio";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./component/Slider";
import { useState } from "react";

function App() {
  const [titlePositionX, setTitlePositionX] = useState(0);
  const [titlePositionY, setTitlePositionY] = useState(0);
  const [imgPositionX, setImgPositionX] = useState(0);
  const [imgPositionY, setImgPositionY] = useState(0);

  const handleTitlePositionXChange = (value) => {
    setTitlePositionX(value);
  };

  const handleTitlePositionYChange = (value) => {
    setTitlePositionY(value);
  };

  const handleImgPositionXChange = (value) => {
    setImgPositionX(value);
  };

  const handleImgPositionYChange = (value) => {
    setImgPositionY(value);
  };

  return (
    <>
      <div className="d-flex align-items-center row">
        <div className="col-6">
          <Audio
            title="The Subtle Art of Not Giving a F*ck Podcast"
            description="Sex, Drugs, and Money Might Actually Make You Happier (ft. Sonja Lyubomirsky)"
            imageSrc="logo.jpg"
            additionalText="All wight. So i did my assignment on the four types of holiday shoppers. So the first one is called the Evergreen and this buyer spreads their"
            titlePositionX={titlePositionX}
            titlePositionY={titlePositionY}
            imgPositionX={imgPositionX}
            imgPositionY={imgPositionY}
          />
        </div>
        <div className="col-6">
          <Slider
            labelText1="Title PositionX"
            labelText2="Title PositionY"
            onSliderXChange={handleTitlePositionXChange}
            onSliderYChange={handleTitlePositionYChange}
            minX={0}
            minY={0}
            maxX={50}
            maxY={350}
          />
          <Slider
            labelText1="Img PositionX"
            labelText2="Img PositionY"
            onSliderXChange={handleImgPositionXChange}
            onSliderYChange={handleImgPositionYChange}
            minX={0}
            minY={-150}
            maxX={200}
            maxY={70}
          />
        </div>
      </div>
    </>
  );
}

export default App;
