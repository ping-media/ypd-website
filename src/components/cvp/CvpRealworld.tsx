"use client";

import { useState } from "react";
import Image from "next/image";

interface UseCase {
  id: number;
  title: string;
  quote?: string;
  description: string;
  icon: string; // image path
  image: string; // preview image
}

interface Props {
  heading: string;
  subheading: string;
  items: UseCase[];
  quoteOverlay?: boolean; // NEW prop
}

export default function CvpRealworld({
  heading,
  subheading,
  items,
  quoteOverlay = false, // default: false (quote on card)
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-6 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 px-2 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-brand-gray max-w-4xl text-sm sm:text-base lg:text-lg">
            {subheading}
          </p>
        </div>

        {/* Layout */}
        <div className="flex w-full max-w-7xl flex-col-reverse items-stretch gap-6 sm:gap-10 md:flex-row lg:gap-14">
          {/* Left: Cards */}
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            {items.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all duration-200 sm:p-5 ${
                  index === activeIndex
                    ? "border-brand-accent bg-green-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {/* Icon */}
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

                {/* Text */}
                <div className="text-left">
                  <h3
                    className={`font-red-rose text-base sm:text-lg lg:text-xl ${
                      index === activeIndex
                        ? "text-brand-primary"
                        : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Quote inside card (only if not using overlay mode) */}
                  {!quoteOverlay && item.quote && (
                    <p className="text-brand-gray text-xs italic sm:text-sm">
                      {item.quote}
                    </p>
                  )}

                  <p className="text-brand-gray mt-1 text-xs sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Big Image with optional Quote Overlay */}
          <div className="relative h-[300px] min-h-[300px] w-full flex-1 overflow-hidden rounded-lg shadow-lg md:h-auto">
            <Image
              key={items[activeIndex].image}
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-all duration-700 ${
                loaded ? "blur-0" : "scale-105 blur-xl"
              }`}
              onLoadingComplete={() => setLoaded(true)}
            />

            {quoteOverlay && items[activeIndex].quote && (
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                <p className="mx-auto max-w-2xl text-center text-sm leading-snug font-normal text-white drop-shadow-md sm:text-base sm:leading-relaxed lg:text-lg lg:leading-relaxed">
                  {items[activeIndex].quote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
