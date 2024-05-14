import React, { useState } from "react";
import { Container, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({
  labelText1,
  labelText2,
  onSliderXChange,
  onSliderYChange,
  maxX,
  maxY,
  minX,
  minY,
}) {
  const [sliderX, setSliderX] = useState(0);
  const [sliderY, setSliderY] = useState(0);

  const handleSliderXChange = (e) => {
    setSliderX(e.target.value);
    onSliderXChange(e.target.value);
  };

  const handleSliderYChange = (e) => {
    setSliderY(e.target.value);
    onSliderYChange(e.target.value);
  };

  return (
    <div className="App">
      <Container>
        <p>{labelText1}</p>
        <Input
          type="range"
          min={minX}
          max={maxX}
          value={sliderX}
          onChange={handleSliderXChange}
        />
        <p>{labelText2}</p>
        <Input
          type="range"
          min={minY}
          max={maxY}
          value={sliderY}
          onChange={handleSliderYChange}
        />
      </Container>
    </div>
  );
}

export default Slider;
