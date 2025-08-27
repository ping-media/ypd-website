import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  buttonText: string;
  href: string;
};

const PartnersCard = ({ image, title, buttonText, href }: CardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm w-full h-80">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <Link
        href={href}
        className="absolute cursor-pointer top-3 right-3 bg-brand-primary hover:bg-brand-primary/90 border border-brand-accent text-white px-4 py-2 text-base rounded-lg"
      >
        {buttonText}
      </Link>
      <div className="absolute bottom-4 left-4 text-white text-lg font-red-rose">
        {title}
      </div>
    </div>
  );
};

export default PartnersCard;
