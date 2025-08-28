import React from "react";
import Image from "next/image";

type NewsCardProps = {
  icon: string;
  description: string;
};

const NewsCard = ({ icon, description }: NewsCardProps) => {
  return (
    <div className="bg-brand-primary/5 flex h-full flex-col gap-10 rounded-lg p-5">
      {/* Icon */}
      <div className="relative h-10 w-10">
        <Image src={icon} alt="icons" fill className="object-contain" />
      </div>

      {/* Description */}
      <p className="text-brand-gray text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default NewsCard;
