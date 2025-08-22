import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CvpSeperate = () => {
  return (
    <div className="relative max-w-[2560px] mx-auto px-4 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Background image */}
      <Image
        src="/cvplite/cvpBg.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between items-start gap-6 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-full sm:max-w-3xl font-red-rose">
          <span className="font-bold">CVP Lite™</span> → Your Gateway to
          Future-Ready Decision-Making
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 text-base sm:text-lg max-w-full sm:max-w-2xl">
          Because when you know what fits, you grow with purpose.
        </p>

        {/* Button */}
        <div className="w-full sm:w-auto">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white rounded-md px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium shadow hover:bg-gray-200 transition w-full sm:w-auto text-center"
          >
            Start Your Career Journey Today
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CvpSeperate;
