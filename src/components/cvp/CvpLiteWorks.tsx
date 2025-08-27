"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

export interface AudienceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface CvpLiteWorksProps {
  heading?: string;
  subheading?: string;
  audience: AudienceItem[];
  ctaText?: string;
  ctaLink?: string;
  ctaSubtext?: string;
}

export default function CvpLiteWorks({
  heading = "Why CVP Lite Works",
  subheading = "Because you shouldn’t choose your career based on guesswork or generic quizzes.",
  audience,
  ctaText = "Start Your Journey Today",
  ctaLink = "/start",
  ctaSubtext = "Perfect first step before college, entrance exams, or big decisions.",
}: CvpLiteWorksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = audience[activeIndex];

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
              {subheading}
            </p>
          )}
        </div>

        {/* Responsive Layout */}
        <div className="w-full max-w-7xl">
          {/* Desktop */}
          <div className="hidden lg:flex gap-4 sm:gap-10 items-center">
            {/* Left: Image */}
            <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[400px]">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Right: Cards */}
            <div className="grid grid-cols-1 gap-4 flex-1">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg border flex gap-4 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                                      ${
                                        index === activeIndex
                                          ? "bg-green-100 text-brand-primary"
                                          : "bg-gray-100 text-brand-gray"
                                      }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-red-rose">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden md:flex lg:hidden flex-col gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[500px] w-full">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg border flex gap-3 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${
                      index === activeIndex
                        ? "bg-green-100 text-brand-primary"
                        : "bg-gray-100 text-brand-gray"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-red-rose">{item.title}</h3>
                    <p className="text-sm text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-6 md:hidden">
            <div className="flex flex-col gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[350px] w-full">
                <Image
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 rounded-lg border flex gap-3 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${
                      index === activeIndex
                        ? "bg-green-100 text-brand-primary"
                        : "bg-gray-100 text-brand-gray"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-red-rose">{item.title}</h3>
                    <p className="text-sm text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          {ctaLink && (
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium shadow-sm transition-colors"
            >
              <Zap size={18} /> {ctaText}
            </Link>
          )}
          {ctaSubtext && (
            <h2 className="font-red-rose text-base sm:text-lg text-center">
              {ctaSubtext}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}
