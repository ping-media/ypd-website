import React from "react";

type PersonaliseCardProps = {
  title: string;
  description: string;
};

const PersonaliseCard = ({ title, description }: PersonaliseCardProps) => {
  return (
    <div className="rounded-lg border border-gray-100 p-0.5">
      <div className="m-1 flex h-56 flex-col items-center justify-center rounded-lg border border-gray-100 bg-gradient-to-tr from-green-100/50 via-green-100/20 to-white p-5 text-center shadow-sm sm:p-10">
        {/* Title */}
        <h3 className="font-red-rose mb-2 text-base text-black sm:text-lg">
          {title}
        </h3>

        {/* Description */}
        <p className="text-brand-gray text-sm leading-snug sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PersonaliseCard;
