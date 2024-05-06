type classNameProps = {
  className?: string;
};

type childrenProps = {
  children?: React.ReactNode;
};

interface CardProps {
  isClient: boolean;
  sliderValue: number;
  handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sliderMin: number;
  sliderMax: number;
  sliderBgWidth: string;
}

interface switchProps {
  switchStates: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  passwordStrength: () => string;
  handleSwitchChange: (
    type: "uppercase" | "lowercase" | "numbers" | "symbols",
  ) => void;
  countCheckedSwitch: () => number;
}

type HeaderProps = {
  password: string;
};
