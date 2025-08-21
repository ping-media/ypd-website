import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export type ClarityCardProps = {
  image: string;
  text: string;
  href: string;
  Icon?: LucideIcon;
};

const ClarityCard: React.FC<ClarityCardProps> = ({
  image,
  text,
  href,
  Icon,
}) => {
  return (
    <div className="flex flex-col p-3 sm:p-6 rounded-lg border border-[#D3E4D4] bg-[#E1F4E3] gap-3 sm:gap-6 h-full">
      <div className="aspect-square w-full relative overflow-hidden rounded-lg">
        <Image src={image} alt={text} fill className="object-cover" />
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center justify-center text-base font-base rounded-lg border border-black bg-transparent hover:bg-brand-primary hover:border-brand-accent hover:text-white transition px-5 py-3.5 w-full truncate"
        title={text} // text on hover
      >
        {Icon && <Icon className="mr-2 w-6 h-6 shrink-0" />}
        <span className="truncate">{text}</span>
      </Link>
    </div>
  );
};

export default ClarityCard;
