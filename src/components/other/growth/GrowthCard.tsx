import React from "react";
import Image from "next/image";

type GrowthCardProps = {
  image: string;
  heading: string;
  description: string;
};

const GrowthCard = ({ image, heading, description }: GrowthCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-white m-1">
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <div className="font-red-rose text-lg">{heading}</div>
        <div className="mt-2 text-sm text-brand-gray leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
