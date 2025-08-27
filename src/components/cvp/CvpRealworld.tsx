"use client";

import { useState } from "react";
import Image from "next/image";

interface UseCase {
  id: number;
  title: string;
  quote: string;
  description: string;
  icon: string; // will be an image path now
  image: string; // right-hand preview image
}

interface Props {
  heading: string;
  subheading: string;
  items: UseCase[];
}

export default function CvpRealworld({ heading, subheading, items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-6 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center px-2">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray max-w-4xl">
            {subheading}
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-10 lg:gap-14 items-stretch w-full max-w-7xl">
          {/* Left: Cards */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {items.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`p-4 sm:p-5 rounded-lg border flex gap-4 items-start cursor-pointer transition-all duration-200
                  ${
                    index === activeIndex
                      ? "border-brand-accent bg-green-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
              >
                {/* Icon Image */}
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

                {/* Text */}
                <div className="text-left">
                  <h3
                    className={`text-base sm:text-lg lg:text-xl font-red-rose ${
                      index === activeIndex
                        ? "text-brand-primary"
                        : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm italic text-brand-gray">
                    {item.quote}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-brand-gray mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Big Image */}
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg w-full h-[300px] md:h-auto min-h-[300px]">
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
