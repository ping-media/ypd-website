import React from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";
import Image from "next/image";

const Seperate = () => {
  return (
    <div className="relative mx-auto max-w-[2560px] overflow-hidden px-5 py-20 sm:px-10 lg:px-20">
      {/* Background image */}
      <Image
        src="/seperate.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 sm:gap-14">
        {/* Heading */}
        <h2 className="font-red-rose max-w-full text-2xl leading-snug text-white sm:text-3xl lg:max-w-xl lg:text-4xl">
          Ready to Experience Your Own Career Journey with YPD?
        </h2>

        {/* Button */}
        <div className="flex w-full justify-start lg:w-auto">
          <Link
            href="#"
            className="text-lato bg-brand-primary border-brand-accent hover:bg-brand-primary/90 flex items-center justify-center gap-1 rounded-lg border px-4 py-3 text-sm text-white transition duration-100 sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
          >
            <UserRound size={24} />
            <span>Start My Personalized Path</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seperate;
