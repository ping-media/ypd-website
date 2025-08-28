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
    <div className="flex h-full flex-col gap-3 rounded-lg border border-[#D3E4D4] bg-[#E1F4E3] p-3 sm:gap-6 sm:p-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image src={image} alt={text} fill className="object-cover" />
      </div>

      <Link href={href} className="btn-hover-brand btn-size group" title={text}>
        {icon && (
          <div className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
            <Image
              src={icon}
              alt="icon"
              fill
              className="object-contain group-hover:invert"
            />
          </div>
        )}
        <span className="truncate">{text}</span>
      </Link>
    </div>
  );
};

export default ClarityCard;
