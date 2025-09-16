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
  ctaText,
  ctaLink = "/start",
  ctaSubtext,
}: CvpLiteWorksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = audience[activeIndex];
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Responsive Layout */}
        <div className="w-full max-w-7xl">
          {/* Desktop */}
          <div className="hidden items-stretch gap-4 sm:gap-10 lg:flex">
            {/* Left: Image */}
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg shadow-lg">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                className={`object-cover transition-all duration-700 ${
                  loaded ? "blur-0" : "scale-105 blur-xl"
                }`}
                onLoadingComplete={() => setLoaded(true)}
              />
            </div>

            {/* Right: Cards */}
            <div className="grid flex-1 grid-cols-1 gap-4">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all duration-200 sm:p-5 ${
                    index === activeIndex
                      ? "border-brand-primary bg-green-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      index === activeIndex
                        ? "text-brand-primary bg-green-100"
                        : "text-brand-gray bg-gray-100"
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
                    <h3 className="font-red-rose text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden flex-col gap-8 md:flex lg:hidden">
            <div className="relative min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  loaded ? "blur-0" : "scale-105 blur-xl"
                }`}
                onLoadingComplete={() => setLoaded(true)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                    index === activeIndex
                      ? "border-brand-primary bg-green-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      index === activeIndex
                        ? "text-brand-primary bg-green-100"
                        : "text-brand-gray bg-gray-100"
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
                    <h3 className="font-red-rose text-base">{item.title}</h3>
                    <p className="text-brand-gray text-sm">
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
              <div className="relative min-h-[350px] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    loaded ? "blur-0" : "scale-105 blur-xl"
                  }`}
                  onLoadingComplete={() => setLoaded(true)}
                />
              </div>
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                    index === activeIndex
                      ? "border-brand-primary bg-green-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      index === activeIndex
                        ? "text-brand-primary bg-green-100"
                        : "text-brand-gray bg-gray-100"
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
                    <h3 className="font-red-rose text-base">{item.title}</h3>
                    <p className="text-brand-gray text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {ctaText && ctaLink && (
          <div className="flex flex-col items-center gap-6">
            <Link
              href={ctaLink}
              className="btn-size btn-primary font-medium shadow-sm"
            >
              <Zap size={18} /> {ctaText}
            </Link>

            {ctaSubtext && (
              <h2 className="font-red-rose text-center text-base sm:text-lg">
                {ctaSubtext}
              </h2>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
