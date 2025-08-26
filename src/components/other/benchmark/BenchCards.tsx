import React from "react";
import Image from "next/image";

type BenchCardProps = {
  image: string;
  heading: string;
  subheading: string;
};

const BenchCard = ({ image, heading, subheading }: BenchCardProps) => {
  return (
    <div className="p-6 sm:p-8 rounded-xl border bg-white drop-shadow-md max-sm:h-[220px] sm:h-[250px] flex flex-col m-1">
      <div className="flex flex-col gap-5 flex-grow">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ECFDF5] flex items-center justify-center rounded-md shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
          <Image src={image} alt={heading} width={36} height={36} />
        </div>

        <div className="space-y-1">
          <h3 className="font-red-rose text-lg sm:text-[22px] leading-tight">
            {heading}
          </h3>
          <p className="text-sm sm:text-base text-brand-gray leading-snug line-clamp-3">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenchCard;
