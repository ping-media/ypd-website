import React from "react";
import Image from "next/image";

type EmpowerCardProps = {
  icon: string;
  title: string;
  description: string;
};

const EmpowerCard = ({ icon, title, description }: EmpowerCardProps) => {
  return (
    <div className="m-1 flex h-72 w-fit flex-col items-center justify-start gap-8 rounded-xl bg-white p-4 drop-shadow-sm sm:p-8">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center space-y-1 text-center">
        {/* Reserve equal height for headings so they align */}
        <h3 className="font-red-rose min-h-[3rem] text-lg leading-snug text-black sm:text-xl">
          {title}
        </h3>
        <p className="text-brand-gray line-clamp-6 text-sm leading-snug sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmpowerCard;
