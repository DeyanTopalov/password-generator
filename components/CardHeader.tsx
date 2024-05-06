import { CopyIcon } from "./ui/icons";

interface CardHeaderProps extends classNameProps, HeaderProps {}

const CardHeader = ({ className, password }: CardHeaderProps) => {
  return (
    <div className={className}>
      <p className="text-2xl font-bold text-clr-gray-500 md:text-[2rem]">
        {password}
      </p>
      <CopyIcon />
    </div>
  );
};

export default CardHeader;
