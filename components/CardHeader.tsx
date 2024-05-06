import { CopyIcon } from "./ui/icons";

interface CardHeaderProps extends classNameProps, HeaderProps {}

const CardHeader = ({ className, password }: CardHeaderProps) => {
  return (
    <div className={className}>
      {password === "" ? (
        <p className="text-2xl font-bold text-clr-gray-500 md:text-[2rem]">
          P4$5W0rD!
        </p>
      ) : (
        <p className="text-2xl font-bold text-clr-gray-200 md:text-[2rem]">
          {password}
        </p>
      )}
      <button>
        <p className="sr-only">Copy Password</p>
        <CopyIcon />
      </button>
    </div>
  );
};

export default CardHeader;
