import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ClarityCardProps = {
  image: string;
  text: string;
  href: string;
  icon?: string;
};

const ClarityCard: React.FC<ClarityCardProps> = ({
  image,
  text,
  href,
  icon,
}) => {
  return (
    <div className="flex flex-col p-3 sm:p-6 rounded-lg border border-[#D3E4D4] bg-[#E1F4E3] gap-3 sm:gap-6 h-full">
      <div className="aspect-square w-full relative overflow-hidden rounded-lg">
        <Image src={image} alt={text} fill className="object-cover" />
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center justify-center text-base font-base rounded-lg border border-black bg-transparent hover:bg-brand-primary hover:border-brand-accent hover:text-white group transition px-5 py-3.5 w-full truncate"
        title={text}
      >
        {icon && (
          <div className="mr-2 w-6 h-6 relative shrink-0">
            <Image
              src={icon}
              alt="icon"
              fill
              className="object-contain  group-hover:invert"
            />
          </div>
        )}
        <span className="truncate">{text}</span>
      </Link>
    </div>
  );
};

export default ClarityCard;
