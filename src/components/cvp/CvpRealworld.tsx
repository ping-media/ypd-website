"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, HelpCircle, Users, BookOpen } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Stream Confusion",
    quote: `"I don’t know if I should take Science, Commerce, or Arts."`,
    description:
      "CVP Lite helps students identify their ideal stream based on interests, strengths, and thinking style not peer pressure.",
    icon: GraduationCap,
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Too Many Options",
    quote: `"There are too many career paths I’m lost."`,
    description:
      "CVP Lite narrows it down to 2–3 career matches that actually align with the student’s profile and mindset.",
    icon: BookOpen,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Parent Support Needed",
    quote: `"I’m the first in my family aiming for higher studies."`,
    description:
      "CVP Lite builds a parent-ready report that explains student choices clearly, making the family part of the decision.",
    icon: Users,
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Marks ≠ Clarity",
    quote: `"I score well but still don’t know what fits me."`,
    description:
      "CVP Lite helps high performers discover what excites them not just what they’re good at.",
    icon: HelpCircle,
    image: "/cvplite/cvpworks.png",
  },
];

export default function CvpRealworld() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-6 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center px-2">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Real World Use Cases
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray max-w-4xl">
            Career clarity isn’t a quiz result it’s the first real conversation
            with your future. CVP Lite guides that conversation.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-10 lg:gap-14 items-stretch w-full max-w-7xl">
          {/* Left: Cards */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {useCases.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`p-4 sm:p-5 rounded-lg border flex gap-4 items-start cursor-pointer transition-all duration-200
                  ${
                    index === activeIndex
                      ? "border-green-400 bg-green-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                  ${
                    index === activeIndex
                      ? "bg-green-100 text-brand-primary"
                      : "bg-gray-100 text-brand-gray"
                  }`}
                >
                  <item.icon size={20} />
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

          {/* Right: Image */}
          {/* Right: Image */}
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg w-full h-[300px] md:h-auto min-h-[300px]">
            <Image
              src={useCases[activeIndex].image}
              alt={useCases[activeIndex].title}
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
