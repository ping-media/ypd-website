import React from "react";
import Image from "next/image";

type ImpactCardProps = {
  icon: string; // icon image path
  title: string;
  description: string;
};

const ImpactCard = ({ icon, title, description }: ImpactCardProps) => {
  return (
    <div className="m-1 flex h-72 w-fit flex-col items-center justify-start gap-6 rounded-xl bg-white p-6 drop-shadow-sm sm:p-10">
      <div className="flex flex-grow flex-col items-center gap-3 text-center sm:gap-6">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>

        {/* Text */}
        <div className="space-y-1">
          {/* Reserve equal height for heading across all cards */}
          <h3 className="font-red-rose min-h-[2.5rem] text-xl leading-snug text-black">
            {title}
          </h3>
          <p className="text-brand-gray text-center text-base leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
