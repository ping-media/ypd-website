"use client";

import Image from "next/image";
import { User, BookOpen, Brain, Award, LucideIcon } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discover Your Career Energy",
    description:
      "Through ultra-personalized guided reflections, scenarios, questions, and rich video exploration, you begin to surface hidden interests, skills, and thought patterns — all in a private space with no judgment.",
    icon: User,
  },
  {
    id: 2,
    title: "Capture Your Learning Style & Thinking",
    description:
      "Adaptive insights help you understand how you absorb, process, and reflect on career-related information — mapping your personal preferences aligned with your passions & interests.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Connect Your Cognitive Profile",
    description:
      "Each step in CVP Lite™ is connected and works in closed-loop. With adaptive psychometrics your real passions, interests & strengths are revealed — making it the only active assessment available.",
    icon: Brain,
  },
  {
    id: 4,
    title: "Celebrate Your Personalized CVP Lite™ Report",
    description:
      "Once your CVP Lite™ journey is complete, you will be emailed your Career Pathway Report within a short while.",
    icon: Award,
  },
];

export default function CvpLiteSteps() {
  return (
    <section className="p-6 sm:p-12 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-10 text-center font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">How it Works</h2>
          <p className="text-base sm:text-lg text-brand-gray">
            The CVP Lite™ is a structured entry level Career Clarity product for
            a lite walk-through of your career choices, it’s adaptive journey is
            crafted to transform raw career curiosity into structured career
            clarity. Here’s a glimpse of your guided experience
          </p>
        </div>

        {/* Top Section (1 & 2 steps left, image right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-30">
          {/* Cards */}
          <div className="flex flex-col gap-8 lg:w-[40%] items-stretch">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.id}
                className="relative flex items-start gap-4 h-full"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 mt-2 sm:mt-6 rounded-full border border-black flex items-center justify-center font-bold bg-white">
                  {step.id}
                </div>

                {/* Card */}
                <div className="border border-gray-200 rounded-2xl bg-[#fdfdfd] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition h-full">
                  <div className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                    <step.icon size={22} />
                  </div>
                  <h3 className="font-red-rose text-2xl text-start">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray leading-relaxed text-start">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:w-[60%]">
            <Image
              src="/cvplite/cvplite1.png"
              alt="Step Preview"
              width={800}
              height={600}
              className="rounded-4xl shadow-md w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Section (image left, steps 3 & 4 right) */}
        <div className="flex flex-col items-center gap-12 lg:gap-30 lg:flex-row-reverse">
          {/* Cards */}
          <div className="flex flex-col gap-8 lg:w-[40%] items-stretch">
            {steps.slice(2).map((step) => (
              <div
                key={step.id}
                className="relative flex items-start gap-4 h-full"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 mt-6 rounded-full border border-black flex items-center justify-center font-bold bg-white">
                  {step.id}
                </div>

                {/* Card */}
                <div className="border border-gray-200 rounded-2xl bg-[#fefefe] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition h-full">
                  <div className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                    <step.icon size={22} />
                  </div>
                  <h3 className="font-red-rose text-2xl text-start">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray leading-relaxed text-start">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:w-[60%]">
            <Image
              src="/cvplite/cvplite2.png"
              alt="Step Preview"
              width={800}
              height={600}
              className="rounded-4xl shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
