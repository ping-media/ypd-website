"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Map, Target } from "lucide-react";

const sampleData = [
  {
    title: "Student Profile Mapping",
    description:
      "Every sample is based on a unique learner’s personality, interest, and cognitive traits to show how real students find real direction.",
    image: "/about/research.png",
    icon: Map,
  },
  {
    title: "Career Fit + Adaptive Roles",
    description:
      "Each sample pathway includes one core career and 1–3 alternative tracks — chosen for long-term alignment and flexibility across domains.",
    image: "/careerPath/careerPath.png",
    icon: Briefcase,
  },
  {
    title: "Fit Score + Launch Plan",
    description:
      "Includes role-readiness signals, improvement nudges, and practical upskilling strategies tailored to each pathway’s goal.",
    image: "/about/research.png",
    icon: Target,
  },
];

const Samples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSample = sampleData[activeIndex];

  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            What Our Career Samples Reveal
          </h2>
        </div>

        {/* Content */}
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl flex-col gap-6 rounded-xl bg-gray-50 p-4 sm:gap-10 md:flex-row">
            {/* Right Column (Dynamic Image) - moved first for reverse layout */}
            <div className="relative order-1 min-h-[300px] flex-1 overflow-hidden rounded-lg shadow-lg md:order-none">
              <Image
                src={activeSample.image}
                alt={activeSample.title}
                fill
                priority
                sizes="(max-width: 500px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Left Column (Cards with Icon, Heading & Subheading) */}
            <div className="flex w-full flex-col justify-center gap-4 md:w-2/5">
              {sampleData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                      isActive
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    {/* Icon */}
                    <div className="text-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <item.icon size={20} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-red-rose text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray text-sm leading-tight sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Samples;
