"use client";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = ({ className }: classNameProps) => {
  return (
    <div className={className}>
      <CardHeader className="flex items-center justify-between bg-clr-gray-700 px-4 py-4 md:px-8 md:py-5" />
      <CardBody className=" bg-clr-gray-700 px-4 py-4 md:px-8 md:py-6" />
    </div>
  );
};

export default Card;
