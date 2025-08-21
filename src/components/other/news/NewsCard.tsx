import React from "react";
import Image from "next/image";

type NewsCardProps = {
  icon: string;
  description: string;
};

const NewsCard = ({ icon, description }: NewsCardProps) => {
  return (
    <div className="p-5 rounded-lg bg-brand-primary/5 gap-10 flex flex-col h-full">
      {/* Icon */}
      <div className="w-10 h-10 relative">
        <Image src={icon} alt="icons" fill className="object-contain" />
      </div>

      {/* Description */}
      <p className="text-brand-gray text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default NewsCard;
