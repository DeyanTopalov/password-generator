import Slider from "./Slider";
import { useState } from "react";
import { Switch } from "./ui/switch";

const CardBody = ({ className }: classNameProps) => {
  const [switchStates, setSwitchStates] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleSwitchChange = (
    type: "uppercase" | "lowercase" | "numbers" | "symbols",
  ) => {
    setSwitchStates({ ...switchStates, [type]: !switchStates[type] });
  };

  const countCheckedSwitch = () => {
    return Object.values(switchStates).filter((isChecked) => isChecked).length;
  };
  console.log(`Number of checked switches: ${countCheckedSwitch()}`);

  const getStrengthText = () => {
    const checkedCount = countCheckedSwitch();

    switch (checkedCount) {
      case 1:
        return "Too Weak";
      case 2:
        return "Weak";
      case 3:
        return "Medium";
      case 4:
        return "Strong";
      default:
        return ""; // No strength indication for 0 checked switches
    }
  };

  return (
    <div className={className}>
      <Slider />
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
          <p className="font-bold">{getStrengthText()}</p>
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
      <button className="w-full bg-clr-neon-green py-4 text-base font-bold text-clr-gray-700 md:mb-2 md:py-5 md:text-lg">
        GENERATE ---
      </button>
    </div>
  );
};

export default CardBody;
