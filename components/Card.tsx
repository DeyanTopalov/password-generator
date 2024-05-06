"use client";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { generatePassword } from "@lib/utils";
import { useState, useEffect } from "react";

const Card = ({ className }: classNameProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(10);
  const [password, setPassword] = useState<string>("");
  const sliderMin = 1;
  const sliderMax = 20;
  const sliderBgWidth = `${(sliderValue / sliderMax) * 100}%`;

  const generateNewPassword = () => {
    const newPassword = generatePassword(
      sliderValue,
      switchStates.uppercase,
      switchStates.lowercase,
      switchStates.numbers,
      switchStates.symbols,
    );
    setPassword(newPassword);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const passwordStrength = () => {
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
      <CardHeader
        className="flex items-center justify-between bg-clr-gray-700 px-4 py-4 md:px-8 md:py-5"
        password={password}
      />
      <CardBody
        className=" bg-clr-gray-700 px-4 py-4 md:px-8 md:py-6"
        isClient={isClient}
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
        sliderMin={sliderMin}
        sliderMax={sliderMax}
        sliderBgWidth={sliderBgWidth}
        switchStates={switchStates}
        passwordStrength={passwordStrength}
        handleSwitchChange={handleSwitchChange}
        countCheckedSwitch={countCheckedSwitch}
        generateNewPassword={generateNewPassword}
      />
    </div>
  );
};

export default Card;
