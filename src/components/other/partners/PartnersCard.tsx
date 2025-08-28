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
    <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-sm">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <Link
        href={href}
        className="bg-brand-primary hover:bg-brand-primary/90 border-brand-accent absolute top-3 right-3 cursor-pointer rounded-lg border px-4 py-2 text-base text-white"
      >
        {buttonText}
      </Link>
      <div className="font-red-rose absolute bottom-4 left-4 text-lg text-white">
        {title}
      </div>
    </div>
  );
};

export default PartnersCard;
