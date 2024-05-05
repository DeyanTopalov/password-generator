import { CopyIcon } from "./ui/icons";

const CardHeader = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <p className="text-2xl font-bold text-clr-gray-500 md:text-[2rem]">
        P4$5W0rD!
      </p>
      <CopyIcon />
    </div>
  );
};

export default CardHeader;
