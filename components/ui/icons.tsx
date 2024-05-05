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
