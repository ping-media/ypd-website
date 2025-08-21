"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  RefreshCw,
  Target,
  Compass,
} from "lucide-react";
import ProgramCard from "./ProgramCard";

const programsData = [
  {
    title: "Career Vision Program™ - Lite",
    target: "Class 9 - 12 Students",
    description:
      "A self-paced experience to discover career inclinations, build early self-awareness, and align choices without pressure. Ideal for high school clarity & parent alignment.",
    image: "/lite.png",
    buttonText: "Start Career Lite",
    icon: GraduationCap,
    buttonIcon: GraduationCap,
  },
  {
    title: "Career Vision Program™ - Advance",
    target: "Class 11+ & College",
    description:
      "Mentor-led guidance, deep assessments, skill mapping, and career alignment tools for students building toward internships or early direction clarity.",
    image: "/advance.png",
    buttonText: "Start Advance Track",
    icon: Rocket,
    buttonIcon: Compass,
  },
  {
    title: "Career Vision Program™ - Challenger",
    target: "Final-Year UG/PG & Fresh Graduates ",
    description:
      "Complete blueprint with 3 pathway maps, EQ + cognition analytics, mentor coaching, certification roadmap, resume-building & launch readiness.",
    image: "/professional.png",
    buttonText: "Start Challenger Track",
    icon: Briefcase,
    buttonIcon: Target,
  },
  {
    title: "Career Reinvention Program™",
    target: "Mid-Career Professionals ",
    description:
      "For those at a pivot point — leverage the Reinvention Framework™ to reassess your value, reposition your skillset, and relaunch into a more aligned future role.",
    image: "/reinvention.png",
    buttonText: "Start Reinvention",
    icon: RefreshCw,
    buttonIcon: RefreshCw,
  },
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = programsData[activeIndex];
  const ButtonIcon = activeProgram.buttonIcon;

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-brand-bg flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Your Path, Your Way: Programs for <br /> Every Stage
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl mx-auto">
            Start your journey with the program that matches your readiness.
            From high school discovery to professional reinvention, Youth Pulse
            Digital™ has a track built for you.
          </p>
        </div>

        {/* Program Section */}
        <div className="flex justify-center w-full">
          <div className="flex max-w-7xl w-full bg-brand-primary/10 rounded-lg p-4 gap-4 sm:gap-10 flex-col-reverse md:flex-row">
            {/* Left Column */}
            <div className="flex flex-col justify-center w-full md:w-4/10 gap-4">
              {programsData.map((program, index) => (
                <ProgramCard
                  key={program.title}
                  title={program.title}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  icon={program.icon}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[400px]">
              <Image
                src={activeProgram.image}
                alt={activeProgram.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 sm:p-6 gap-2">
                <h3 className="text-white text-2xl font-medium">
                  {activeProgram.target}
                </h3>
                <p className="text-white/80 text-base font-light">
                  {activeProgram.description}
                </p>
                <button className="mt-2 flex items-center justify-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-md w-full border border-brand-accent hover:bg-green-800 transition-colors">
                  {ButtonIcon && <ButtonIcon size={18} />}
                  {activeProgram.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
