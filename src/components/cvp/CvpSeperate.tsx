import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/url";

interface CvpSeperateProps {
  bgImage: string;
  heading: React.ReactNode; // allow JSX or plain text
  subheading?: React.ReactNode; // optional
  ctaText: string;
  ctaHref: string;
  ctaIcon?: React.ReactNode;
  subtext?: string;
}

const CvpSeperate = ({
  bgImage,
  heading,
  subheading,
  ctaText,
  ctaHref,
  ctaIcon,
  subtext,
}: CvpSeperateProps) => {
  return (
    <div className="relative mx-auto max-w-[2560px] px-4 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-10">
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
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Heading + Subheading */}
        <div className="space-y-3">
          <h2 className="font-red-rose max-w-full text-2xl leading-snug font-semibold text-white sm:max-w-3xl sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          {subheading && (
            <p className="max-w-full text-base text-gray-200 sm:max-w-2xl sm:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="font-lato w-full sm:w-auto">
          <Link
            href={`${BASE_URL}${ctaHref}`}
            className="btn-size w-full bg-white text-center font-medium shadow hover:bg-gray-200"
          >
            {ctaText}
            {ctaIcon}
          </Link>
          {subtext && (
            <p className="text-s m mt-4 text-white sm:text-base">{subtext}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CvpSeperate;
