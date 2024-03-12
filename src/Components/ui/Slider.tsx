import React, { useState } from "react";
import "../../CSS_Modules/VhDiv.module.css";
import "../../Css/home.css";
import "../../Css/slider.css";

interface SliderProps {
  callback: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ callback }) => {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsDragging(true);
    handleMouseMove(event); // To update slider position immediately on click
  };

  const handleMouseUp = () => {
    isDragging && setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDragging && setIsDragging(false);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) {
      return;
    }

    const sliderContainer = document.querySelector(
      ".playground-slider"
    ) as HTMLElement | null;

    const sliderThumb = document.querySelector(
      ".playground-slider-ball"
    ) as HTMLElement | null;

    if (!sliderContainer || !sliderThumb) {
      return;
    }

    const sliderWidth = sliderContainer.offsetWidth;
    const sliderThumbCenter = sliderThumb.offsetWidth / 2;

    const newPosition =
      event.clientX -
      sliderContainer.getBoundingClientRect().left -
      sliderThumbCenter;

    let newValue = (newPosition / sliderWidth) * 100;

    // Ensure newValue stays within 0 to 100
    newValue = Math.max(0, Math.min(newValue, 100));
    const restrictedValue = (newValue / 100) * 90 + 10;

    setValue(newValue); // Update the slider value internally
    callback(restrictedValue); // Notify parent component about the change
  };

  return (
    <div
      className="playground-slider-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="playground-slider">
        <div
          className="playground-slider-progression"
          style={{ width: `${value}%` }}
        ></div>
        <div
          className="playground-slider-ball"
          style={{ left: `${value}%` }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
