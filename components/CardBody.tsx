import Slider from "./Slider";
import { Switch } from "./ui/switch";
import { ArrowIcon } from "./ui/icons";

interface CardBodyProps extends classNameProps, CardProps, switchProps {}

const CardBody = ({
  className,
  isClient,
  sliderValue,
  handleSliderChange,
  sliderMin,
  sliderMax,
  sliderBgWidth,
  switchStates,
  passwordStrength,
  handleSwitchChange,
  countCheckedSwitch,
  generateNewPassword,
}: CardBodyProps) => {
  return (
    <div className={className}>
      <Slider
        isClient={isClient}
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
        sliderMin={sliderMin}
        sliderMax={sliderMax}
        sliderBgWidth={sliderBgWidth}
      />
      <div className="mb-8 grid gap-4 text-base md:gap-5 md:text-lg">
        <div className="flex items-center justify-between">
          <label htmlFor="uppercase letters">Include Uppercase Letters</label>
          <Switch
            id="uppercase letters"
            checked={switchStates.uppercase}
            onCheckedChange={() => handleSwitchChange("uppercase")}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="lowercase letters">Include Lowercase Letters</label>
          <Switch
            id="lowercase letters"
            checked={switchStates.lowercase}
            onCheckedChange={() => handleSwitchChange("lowercase")}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="numbers">Include Numbers</label>
          <Switch
            id="numbers"
            checked={switchStates.numbers}
            onCheckedChange={() => handleSwitchChange("numbers")}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="symbols">Include Symbols</label>
          <Switch
            id="symbols"
            checked={switchStates.symbols}
            onCheckedChange={() => handleSwitchChange("symbols")}
          />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between bg-clr-gray-900 px-4 py-3 md:mb-8 md:px-8 md:py-5">
        <p className="text-clr-gray-500">STRENGTH</p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-bold">{passwordStrength()}</p>
          <div className="flex items-center gap-2">
            <div
              className={`h-[1.75rem] w-[0.625rem] ${
                countCheckedSwitch() < 1
                  ? "border-2 border-clr-gray-200 bg-transparent"
                  : countCheckedSwitch() < 2
                    ? "bg-clr-red"
                    : countCheckedSwitch() < 3
                      ? "bg-clr-orange"
                      : countCheckedSwitch() < 4
                        ? "bg-clr-yellow"
                        : "bg-clr-neon-green"
              } `}
            ></div>
            <div
              className={`h-[1.75rem] w-[0.625rem] ${
                countCheckedSwitch() < 2
                  ? "border-2 border-clr-gray-200 bg-transparent"
                  : countCheckedSwitch() < 3
                    ? "bg-clr-orange"
                    : countCheckedSwitch() < 4
                      ? "bg-clr-yellow"
                      : "bg-clr-neon-green"
              } `}
            ></div>
            <div
              className={`h-[1.75rem] w-[0.625rem] ${
                countCheckedSwitch() < 3
                  ? "border-2 border-clr-gray-200 bg-transparent"
                  : countCheckedSwitch() < 4
                    ? "bg-clr-yellow"
                    : "bg-clr-neon-green"
              } `}
            ></div>
            <div
              className={`h-[1.75rem] w-[0.625rem] ${
                countCheckedSwitch() < 4
                  ? "border-2 border-clr-gray-200 bg-transparent"
                  : "bg-clr-neon-green"
              } `}
            ></div>
          </div>
        </div>
      </div>
      <button
        className="group flex w-full cursor-pointer items-center justify-center gap-4 bg-clr-neon-green py-4 text-base font-bold text-clr-gray-700 hover:border-2 hover:border-clr-neon-green hover:bg-transparent hover:text-clr-neon-green md:mb-2 md:gap-6 md:py-5 md:text-lg"
        onClick={generateNewPassword}
      >
        <p>GENERATE</p>
        <ArrowIcon className="group-hover:stroke-clr-neon-green group-hover:stroke-2" />
      </button>
    </div>
  );
};

export default CardBody;

// className = "group-hover:fill-clr-neon-green group-hover:stroke-clr-neon-green";
