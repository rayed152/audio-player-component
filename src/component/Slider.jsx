import React, { useState } from "react";
import { Container, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  const [sliderX, setSliderX] = useState(0);
  const [sliderY, setSliderY] = useState(0);

  const handleSliderChangeX = (event) => {
    setSliderX(parseInt(event.target.value));
  };

  const handleSliderChangeY = (event) => {
    setSliderY(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <Container>
        {/* div */}
        {/* <div
          style={{
            width: "300px",
            height: "200px",
            border: "1px solid black",
            position: "relative",
          }}
        >
          <div
            className="sliderDiv"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "blue",
              position: "absolute",
              top: `${sliderY}px`,
              left: `${sliderX}px`,
            }}
          >
            Hello
          </div>
        </div> */}
        <Input
          type="range"
          min="0"
          max="250"
          value={sliderX}
          onChange={handleSliderChangeX}
        />
        <Input
          type="range"
          min="0"
          max="250"
          value={sliderY}
          onChange={handleSliderChangeY}
        />
      </Container>
    </div>
  );
}

export default Slider;
