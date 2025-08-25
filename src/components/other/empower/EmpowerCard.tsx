import React from "react";
import Image from "next/image";

type EmpowerCardProps = {
  icon: string;
  title: string;
  description: string;
};

const EmpowerCard = ({ icon, title, description }: EmpowerCardProps) => {
  return (
    <div className="p-4 sm:p-8 rounded-xl bg-white drop-shadow-sm flex flex-col items-center justify-start gap-8 w-fit h-72 m-1">
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>

      {/* Text */}
      <div className="space-y-1 flex flex-col items-center text-center">
        {/* Reserve equal height for headings so they align */}
        <h3 className="font-red-rose text-lg sm:text-xl text-black leading-snug min-h-[3rem]">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-brand-gray leading-snug line-clamp-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmpowerCard;
