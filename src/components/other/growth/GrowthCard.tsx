import React from "react";
import Image from "next/image";

type GrowthCardProps = {
  image: string;
  heading: string;
  description: string;
};

const GrowthCard = ({ image, heading, description }: GrowthCardProps) => {
  return (
    <div className="m-1 overflow-hidden rounded-lg border border-white shadow-sm">
      {/* Image */}
      <div className="relative h-48 w-full">
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
        <div className="text-brand-gray mt-2 text-sm leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
