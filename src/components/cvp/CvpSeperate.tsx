"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CvpSeperateProps {
  bgImage: string;
  heading: React.ReactNode; // allow JSX or plain text
  subheading?: React.ReactNode; // optional
  ctaText: string;
  ctaHref: string;
  ctaIcon?: React.ReactNode;
}

const CvpSeperate = ({
  bgImage,
  heading,
  subheading,
  ctaText,
  ctaHref,
  ctaIcon,
}: CvpSeperateProps) => {
  return (
    <div className="relative max-w-[2560px] mx-auto px-4 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-10">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between items-start gap-2 sm:gap-4 lg:gap-8">
        {/* Heading + Subheading */}
        <div className="space-y-3">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-full sm:max-w-3xl font-red-rose">
            {heading}
          </h2>

          {subheading && (
            <p className="text-gray-200 text-base sm:text-lg max-w-full sm:max-w-2xl">
              {subheading}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="w-full sm:w-auto">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 bg-white rounded-md py-3 px-4 sm:py-3.5 sm:px-5 text-sm sm:text-base lg:text-lg font-medium shadow hover:bg-gray-200 transition w-full sm:w-auto text-center"
          >
            {ctaText}
            {ctaIcon}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CvpSeperate;
