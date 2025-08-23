import React from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";
import Image from "next/image";

const Seperate = () => {
  return (
    <div className="relative max-w-[2560px] mx-auto px-5 sm:px-10 lg:px-20 py-20 overflow-hidden">
      {/* Background image */}
      <Image
        src="/seperate.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between items-start gap-10 sm:gap-14">
        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-red-rose leading-snug max-w-full lg:max-w-xl">
          Ready to Experience Your Own Career Journey with YPD?
        </h2>

        {/* Button */}
        <div className="flex justify-start w-full lg:w-auto">
          <Link
            href="#"
            className="text-lato text-white rounded-lg bg-brand-primary border border-brand-accent hover:bg-brand-primary/80 transition duration-100 text-base sm:text-lg lg:text-xl flex justify-center items-center py-1.5 px-2.5 sm:py-3 sm:px-5 gap-1"
          >
            <UserRound />
            <span>Start My Personalized Path</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seperate;
