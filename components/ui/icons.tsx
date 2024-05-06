import Image from "next/image";

export const CopyIcon = () => {
  return (
    <>
      <Image
        src="/icon-copy.svg"
        alt="Copy Icon"
        width={17.5}
        height={20}
        className="block cursor-pointer hover:grayscale md:hidden"
      />
      <Image
        src="/icon-copy.svg"
        alt="Copy Icon"
        width={21}
        height={24}
        className="hidden cursor-pointer hover:grayscale md:block"
      />
    </>
  );
};

export const ArrowIcon = ({ className }: classNameProps) => {
  return (
    <svg
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#24232C"
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
      />
    </svg>
  );
};
