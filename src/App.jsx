import "./App.css";
import Audio from "./component/Audio";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./component/Slider";
import svg from "./assets/Group.svg";
import bgImage from "./assets/headphones.png";
import { useState } from "react";

function App() {
  const [titlePositionX, setTitlePositionX] = useState(0);
  const [titlePositionY, setTitlePositionY] = useState(0);
  const [descriptionPositionX, setDescriptionPositionX] = useState(0);
  const [descriptionPositionY, setDescriptionPositionY] = useState(0);
  const [imgPositionX, setImgPositionX] = useState(0);
  const [imgPositionY, setImgPositionY] = useState(0);
  const [additionalTextPositionX, setAdditionalTextPositionX] = useState(0);
  const [additionalTextPositionY, setAdditionalTextPositionY] = useState(0);
  const [svgPositionX, setSvgPositionX] = useState(0);
  const [svgPositionY, setSvgPositionY] = useState(0);

  const handleTitlePositionXChange = (value) => {
    setTitlePositionX(value);
  };

  const handleTitlePositionYChange = (value) => {
    setTitlePositionY(value);
  };

  const handleDescriptionPositionXChange = (value) => {
    setDescriptionPositionX(value);
  };

  const handleDescriptionPositionYChange = (value) => {
    setDescriptionPositionY(value);
  };

  const handleImgPositionXChange = (value) => {
    setImgPositionX(value);
  };

  const handleImgPositionYChange = (value) => {
    setImgPositionY(value);
  };

  const handleAdditionalTextPositionXChange = (value) => {
    setAdditionalTextPositionX(value);
  };

  const handleAdditionalTextPositionYChange = (value) => {
    setAdditionalTextPositionY(value);
  };

  const handleSvgPositionXChange = (value) => {
    setSvgPositionX(value);
  };

  const handleSvgPositionYChange = (value) => {
    setSvgPositionY(value);
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
            descriptionPositionX={descriptionPositionX}
            descriptionPositionY={descriptionPositionY}
            imgPositionX={imgPositionX}
            imgPositionY={imgPositionY}
            additionalTextPositionX={additionalTextPositionX}
            additionalTextPositionY={additionalTextPositionY}
            svgPositionX={svgPositionX}
            svgPositionY={svgPositionY}
            svg={svg}
            bgImage={bgImage}
          />
        </div>
        {/* all the sliders here */}
        <div className="col-6">
          <Slider
            labelText1="Title PositionX"
            labelText2="Title PositionY"
            onSliderXChange={handleTitlePositionXChange}
            onSliderYChange={handleTitlePositionYChange}
            minX={-30}
            maxX={70}
            minY={-30}
            maxY={365}
          />
          <Slider
            labelText1="Description PositionX"
            labelText2="Description PositionY"
            onSliderXChange={handleDescriptionPositionXChange}
            onSliderYChange={handleDescriptionPositionYChange}
            minX={-30}
            maxX={50}
            minY={-100}
            maxY={300}
          />
          <Slider
            labelText1="Img PositionX"
            labelText2="Img PositionY"
            onSliderXChange={handleImgPositionXChange}
            onSliderYChange={handleImgPositionYChange}
            minX={-40}
            maxX={225}
            minY={-175}
            maxY={85}
          />
          <Slider
            labelText1="Additional Text PositionX"
            labelText2="Additional Text PositionY"
            onSliderXChange={handleAdditionalTextPositionXChange}
            onSliderYChange={handleAdditionalTextPositionYChange}
            minX={-210}
            maxX={45}
            minY={-175}
            maxY={100}
          />
          <Slider
            labelText1="Svg PositionX"
            labelText2="Svg PositionY"
            onSliderXChange={handleSvgPositionXChange}
            onSliderYChange={handleSvgPositionYChange}
            minX={-55}
            maxX={55}
            minY={-360}
            maxY={0}
          />
        </div>
      </div>
    </>
  );
}

export default App;
