"use client";
import { useState, useEffect } from "react";

const Slider = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(10);
  const sliderMin = 1;
  const sliderMax = 20;
  const sliderBgWidth = `${(sliderValue / sliderMax) * 100}%`;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[300px]">
      <form action="">
        <div className="">
          <p>{sliderMin}</p>
          <input
            type="range"
            name="slider"
            id="slider"
            min={sliderMin}
            max={sliderMax}
            defaultValue={sliderValue}
            onChange={handleSliderChange}
            className="range-slider"
          />
          <p>{sliderMax}</p>
          <p>
            Value: <span>{sliderValue}</span>
          </p>
          <label htmlFor="slider">Include Uppercase</label>
          {isClient && (
            <style>{`.range-slider::before{
            content: "";
            position: absolute;
            z-index: -1;
            inset: 0;
            width: ${sliderBgWidth};
            height: 100%;
            background-color: hsl(var(--neon-green));
          }`}</style>
          )}
        </div>
        <div className="test2" data-widht={sliderBgWidth}>
          test
        </div>
      </form>
    </div>
  );
};

export default Slider;
