import { CopyIcon } from "./ui/icons";
import { useCopyToClipboard } from "@lib/hooks";

interface CardHeaderProps extends classNameProps, HeaderProps {}

const CardHeader = ({ className, password }: CardHeaderProps) => {
  const { isCopied, handleCopyToClipboard, textRef } = useCopyToClipboard();

  return (
    <div className={className}>
      {password === "" ? (
        <p className="text-2xl font-bold text-clr-gray-500 md:text-[2rem]">
          P4$5W0rD!
        </p>
      ) : (
        <p
          className="text-2xl font-bold text-clr-gray-200 md:text-[2rem]"
          ref={textRef}
        >
          {password}
        </p>
      )}
      <button
        onClick={(e) => handleCopyToClipboard(e)}
        className="relative p-1"
        type="button"
        role="button"
      >
        <p className="sr-only">Copy Password</p>
        <CopyIcon />
        {isCopied && (
          <p className="absolute -left-4 -top-6 text-xs text-white">Copied!</p>
        )}
      </button>
    </div>
  );
};

export default CardHeader;
