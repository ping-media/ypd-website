"use client";
import { Sparkles, SquareCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CvpHeroProps {
  title: string;
  subtitle: ReactNode;
  description?: ReactNode;
  features: string[];
  buttonText?: string;
  buttonLink?: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function CvpHero({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink = "#",
  image,
  imageAlt = "Feature Image",
  reverse = false,
}: CvpHeroProps) {
  return (
    <div className="px-4 py-6 sm:py-10 sm:px-10 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16 font-lato">
      <div
        className={`w-full flex flex-col md:flex-row items-center gap-6 sm:gap-10 lg:gap-20 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-5 sm:space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-red-rose leading-snug">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-brand-gray">{subtitle}</p>

          {description && (
            <p className="text-sm sm:text-base text-brand-gray">
              {description}
            </p>
          )}

          <ul className="space-y-3 text-sm sm:text-base">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 justify-start">
                <SquareCheck className="text-brand-primary bg-brand-bg w-5 h-5 shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {buttonText && (
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 sm:px-6 py-3 rounded-lg shadow hover:bg-brand-primary/90 transition"
            >
              <Sparkles className="w-5 h-5" />
              {buttonText}
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-full self-stretch">
          <div className="w-full h-[300px] sm:h-[400px] md:h-full">
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-full object-fill rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
