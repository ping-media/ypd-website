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
    <section className="p-4 sm:p-10 lg:p-20 bg-gradient-to-br from-[#5a8d50] via-brand-primary to-brand-accent flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 font-lato text-white">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4">
          <h2 className="font-red-rose text-2xl sm:text-3xl text-center">
            R&D and Innovation at Youth Pulse Digital™
          </h2>
          <p className="text-base sm:text-lg opacity-90 text-center">
            At Youth Pulse Digital™, research and innovation aren’t support
            functions—they’re the engine driving everything we do. Our core
            belief is simple: the future of career guidance must evolve as fast
            as the world of work itself.
          </p>
        </div>

        {/* Research Section */}
        <div className="flex justify-center w-full">
          <div className="flex max-w-7xl w-full bg-white/10 rounded-lg p-4 gap-6 sm:gap-10 flex-col-reverse md:flex-row">
            {/* Left Column (Research List) */}
            <div className="flex flex-col justify-center w-full md:w-4/10 gap-4">
              {researchData.map((research, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={research.title}
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 sm:p-5 rounded-lg cursor-pointer flex flex-col transition-all duration-200 border-l-4
          ${
            isActive
              ? "border-white bg-white/40 shadow-md"
              : "border-transparent"
          }`}
                  >
                    <span
                      className={`text-base sm:text-lg lg:text-xl font-red-rose font-medium text-white`}
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
            <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[400px]">
              <Image
                src={activeResearch.image}
                alt={activeResearch.title}
                fill
                priority
                sizes="(max-width: 500px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
