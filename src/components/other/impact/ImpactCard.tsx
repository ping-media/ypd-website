import React from "react";
import Image from "next/image";

type ImpactCardProps = {
  icon: string; // icon image path
  title: string;
  description: string;
};

const ImpactCard = ({ icon, title, description }: ImpactCardProps) => {
  return (
    <div className="p-6 sm:p-10 rounded-xl bg-white drop-shadow-sm flex flex-col justify-start items-center gap-6 w-fit h-72 m-1">
      <div className="flex flex-col items-center gap-3 sm:gap-6 text-center flex-grow">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>

        {/* Text */}
        <div className="space-y-1">
          {/* Reserve equal height for heading across all cards */}
          <h3 className="font-red-rose text-xl text-black leading-snug min-h-[2.5rem]">
            {title}
          </h3>
          <p className="text-base text-brand-gray leading-snug text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
