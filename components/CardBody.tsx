import Slider from "./Slider";
import { useState } from "react";

const CardBody = ({ className }: classNameProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  console.log(checked);
  return (
    <div className={className}>
      <Slider />
      <div className="mb-8 grid gap-4 text-base md:gap-5 md:text-lg">
        <div className="flex items-center justify-between">
          <p>Include Uppercase Letters</p>
          <button
            className={`flex h-6 w-11 cursor-pointer items-center justify-start rounded-full  px-1 transition-all duration-300 ease-in-out ${
              checked ? "justify-end bg-clr-neon-green" : "bg-clr-gray-200"
            }`}
            onClick={handleToggle}
          >
            <div className=" size-5 rounded-full bg-clr-gray-700"></div>
            <p className="sr-only">Checked/Unchecked</p>
          </button>
        </div>

        <p>Include Lowercase Letters</p>
        <p>Include Numbers</p>
        <p>Include Symbols</p>
      </div>
      <div className="mb-4 flex items-center justify-between bg-clr-gray-900 px-4 py-3 md:mb-8 md:px-8 md:py-5">
        <p className="text-clr-gray-500">STRENGTH</p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-bold">MEDIUM</p>
          <div className="flex items-center gap-2">
            <div className="h-[1.75rem] w-[0.625rem] bg-clr-yellow"></div>
            <div className="h-[1.75rem] w-[0.625rem] bg-clr-yellow"></div>
            <div className="h-[1.75rem] w-[0.625rem] bg-clr-yellow"></div>
            <div className="h-[1.75rem] w-[0.625rem] border-2 border-clr-gray-200 bg-transparent"></div>
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
// translate-x-[90%]
