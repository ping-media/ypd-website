"use client";

import { useState } from "react";
import Image from "next/image";

interface ResearchItem {
  title: string;
  description: string;
  icon?: React.ElementType;
  image: string;
}

export default function Research() {
  const researchData: ResearchItem[] = [
    {
      title: "AI Personalization Labs",
      description:
        "Enhancing dynamic career pathway generation through real-time modeling",
      image: "/about/research.png",
    },
    {
      title: "Adaptive Learning Pathways",
      description:
        "Exploring tailored education journeys through AI-driven adaptability",
      image: "/about/research.png",
    },
    {
      title: "Behavioral Science Model Research",
      description:
        "Integrating psychology and data to refine decision-making models",
      image: "/about/research.png",
    },
    {
      title: "Career Futurism Studies",
      description: "Analyzing future work trends and emerging opportunities",
      image: "/about/research.png",
    },
    {
      title: "Mentor-AI Synergy Development",
      description:
        "Creating advanced mentor-learner interactions powered by AI",
      image: "/about/research.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeResearch = researchData[activeIndex];

  return (
    <section className="via-brand-primary to-brand-accent flex justify-center bg-gradient-to-br from-[#5a8d50] p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-8 text-white sm:gap-12 lg:gap-16">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            R&D and Innovation at Youth Pulse Digital™
          </h2>
          <p className="text-center text-base opacity-90 sm:text-lg">
            At Youth Pulse Digital™, research and innovation aren’t support
            functions—they’re the engine driving everything we do. Our core
            belief is simple: the future of career guidance must evolve as fast
            as the world of work itself.
          </p>
        </div>

        {/* Research Section */}
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-7xl flex-col-reverse gap-6 rounded-lg bg-white/10 p-4 sm:gap-10 md:flex-row">
            {/* Left Column (Research List) */}
            <div className="flex w-full flex-col justify-center gap-4 md:w-4/10">
              {researchData.map((research, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={research.title}
                    onClick={() => setActiveIndex(index)}
                    className={`flex cursor-pointer flex-col rounded-lg border-l-4 p-4 transition-all duration-200 sm:p-5 ${
                      isActive
                        ? "border-white bg-white/40 shadow-md"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className={`font-red-rose text-base font-medium text-white sm:text-lg lg:text-xl`}
                    >
                      {research.title}
                    </span>
                    <p className="text-base text-white/80">
                      {research.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column (Image + Active Description) */}
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={activeResearch.image}
                alt={activeResearch.title}
                fill
                priority
                sizes="(max-width: 500px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-black/40 p-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
