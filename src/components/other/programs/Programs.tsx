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
    buttonText: "Start CVP Lite",
    icon: GraduationCap,
    buttonIcon: GraduationCap,
  },
  {
    title: "Career Vision Program™ - Advance",
    target: "Class 11+ & College",
    description:
      "Mentor-led guidance, deep assessments, skill mapping, and career alignment tools for students building toward internships or early direction clarity.",
    image: "/advance.png",
    buttonText: "Start CVP Advance",
    icon: Rocket,
    buttonIcon: Compass,
  },
  {
    title: "Careerverse™",
    target: "Final-Year UG/PG & Fresh Graduates ",
    description:
      "Complete blueprint with 3 pathway maps, EQ + cognition analytics, mentor coaching, certification roadmap, resume-building & launch readiness.",
    image: "/professional.png",
    buttonText: "Start CareerVerse™",
    icon: Briefcase,
    buttonIcon: Target,
  },
  {
    title: "Career Reinvention Program™",
    target: "Mid-Career Professionals ",
    description:
      "For those at a pivot point — leverage the Reinvention Framework™ to reassess your value, reposition your skillset, and relaunch into a more aligned future role.",
    image: "/reinvention.png",
    buttonText: "Start CRP",
    icon: RefreshCw,
    buttonIcon: RefreshCw,
  },
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = programsData[activeIndex];
  const ButtonIcon = activeProgram.buttonIcon;

  return (
    <section className="bg-brand-bg flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Your Path, Your Way: Programs for <br /> Every Stage
          </h2>
          <p className="text-brand-gray mx-auto max-w-4xl text-base sm:text-lg">
            Start your journey with the program that matches your readiness.
            From high school discovery to professional reinvention, Youth Pulse
            Digital™ has a track built for you.
          </p>
        </div>

        {/* Program Section */}
        <div className="flex w-full justify-center">
          <div className="bg-brand-primary/10 flex w-full max-w-7xl flex-col-reverse gap-4 rounded-lg p-4 sm:gap-10 md:flex-row">
            {/* Left Column */}
            <div className="flex w-full flex-col justify-center gap-4 md:w-4/10">
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
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={activeProgram.image}
                alt={activeProgram.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-black/30 p-4 sm:p-6">
                <h3 className="text-2xl font-medium text-white">
                  {activeProgram.target}
                </h3>
                <p className="text-base font-light text-white/80">
                  {activeProgram.description}
                </p>
                <button className="btn-primary btn-size mt-2">
                  {ButtonIcon && <ButtonIcon size={24} />}
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
