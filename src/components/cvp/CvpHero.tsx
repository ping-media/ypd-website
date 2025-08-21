"use client";
import { Sparkles, SquareCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CvpHeroProps {
  title: string;
  subtitle: ReactNode; // 👈 now supports JSX
  description?: ReactNode; // 👈 now supports JSX
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
    <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
      <div
        className={`max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-4 sm:gap-10 lg:gap-24 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-red-rose">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-brand-gray leading-tight">
            {subtitle}
          </p>

          {description && <p className="text-brand-gray">{description}</p>}

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <SquareCheck className="text-brand-primary bg-brand-bg w-5 h-5 shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {buttonText && (
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              <Sparkles className="w-5 h-5" />
              {buttonText}
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 h-full w-full">
          <Image
            src={image}
            alt={imageAlt}
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
