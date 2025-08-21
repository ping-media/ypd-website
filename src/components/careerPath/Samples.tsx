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
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            What Our Career Samples Reveal
          </h2>
        </div>

        {/* Content */}
        <div className="flex justify-center w-full">
          <div className="flex max-w-7xl w-full bg-gray-50 rounded-xl p-4 gap-6 sm:gap-10 flex-col md:flex-row">
            {/* Right Column (Dynamic Image) - moved first for reverse layout */}
            <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[300px] order-1 md:order-none">
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
            <div className="flex flex-col justify-center w-full md:w-2/5 gap-4">
              {sampleData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border flex gap-3 items-start
              ${
                isActive
                  ? "border-brand-primary bg-green-50 shadow-sm"
                  : "border-transparent hover:border-gray-300"
              }`}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary shrink-0">
                      <item.icon size={20} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-red-rose">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-tight sm:text-base text-brand-gray">
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
