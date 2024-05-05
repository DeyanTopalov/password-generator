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
    <div className="mb-8 w-full">
      <div className="flex items-center justify-between pb-3 md:pb-5">
        <label htmlFor="slider">Character Length</label>
        <p>
          <span>{sliderValue}</span>
        </p>
      </div>
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
  );
};

export default Slider;
