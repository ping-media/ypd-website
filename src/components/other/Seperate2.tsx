import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Seperate2 = () => {
  return (
    <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
      {/* wrapper */}
      <div className="max-w-7xl w-full min-h-[400px] rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 sm:p-10 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent">
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-xl text-left">
          <h2 className="text-white font-red-rose font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
            Shape Your Future with <br /> Personalized Career Guidance
          </h2>
          <p className="text-white text-base sm:text-lg mt-3 sm:mt-4">
            AI-driven vision mapping and expert mentorship to help students,
            parents, and professionals unlock clarity, confidence, and career
            success.
          </p>

          <Link
            href="/#"
            className="mt-4 sm:mt-6 flex justify-center items-center  gap-2 rounded-lg py-3 px-4 sm:py-3.5 sm:px-5 bg-white text-black hover:bg-white/90 w-fit text-sm sm:text-base lg:text-lg"
          >
            View More
            <ArrowRight size={24} className="shrink-0" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex justify-center items-center mt-4 sm:mt-6 md:mt-0">
          <Image
            src="/seperate2.png"
            alt="img"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Seperate2;
