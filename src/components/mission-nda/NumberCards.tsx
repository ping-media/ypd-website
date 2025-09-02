import React from "react";
import {
  BookOpen,
  Monitor,
  FileText,
  TrendingUp,
  Brain,
  MessageCircle,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Study",
    description: "Topic-wise smart capsules with active recall",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Revise",
    description: "AI nudges and real-world SSB case links",
    icon: Monitor,
  },
  {
    id: 3,
    title: "Test",
    description: "Sectional + full NDA mock tests (tutor-graded)",
    icon: FileText,
  },
  {
    id: 4,
    title: "Track",
    description: "Daily, Weekly & Mission-level dashboards",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Prepare (SSB)",
    description: "Reflective capsule + OLQ linked SRT + GTO",
    icon: Brain,
  },
  {
    id: 6,
    title: "Interview Mode",
    description: "YPO Mentor simulates & evaluates you",
    icon: MessageCircle,
  },
];

const NumberCards: React.FC = () => {
  return (
    <section className="bg-brand-bg flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-12">
        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-xl sm:text-2xl lg:text-3xl">
            Your Mission, Broken Down
          </h2>
          <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
            Mission NDA™ is a premium experience made affordable
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Central dashed line - only between numbers */}
          <div className="absolute left-1/2 hidden w-0.5 -translate-x-px transform border-l-2 border-dashed border-gray-300 md:top-[90px] md:bottom-[90px] md:block lg:top-[76px] lg:bottom-[76px]" />

          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-center">
                {/* Mobile Layout */}
                <div className="flex w-full items-center md:hidden">
                  {/* Number Circle */}
                  {/* <div className="z-10 mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white"> */}
                  <div className="bg-brand-primary relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-lg text-sm text-white sm:h-12 sm:w-12 sm:text-base">
                    {step.id}
                  </div>

                  {/* Card */}
                  <div className="border-brand-primary flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
                    <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                      <step.icon size={22} />
                    </div>
                    <h3 className="font-red-rose text-start text-lg sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden w-full items-center md:flex">
                  {/* Left side cards (odd numbers) */}
                  {step.id % 2 === 1 && (
                    <>
                      <div className="flex w-1/2 justify-end pr-16">
                        <div className="border-brand-primary relative z-10 flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
                          <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                            <step.icon size={22} />
                          </div>
                          <h3 className="font-red-rose text-start text-lg sm:text-xl">
                            {step.title}
                          </h3>
                          <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Horizontal dashed line from card to center */}
                      <div className="absolute top-1/2 left-1/2 z-0 h-0.5 w-20 -translate-x-24 -translate-y-px transform border-t-2 border-dashed border-gray-300" />

                      {/* Number Circle */}
                      <div className="bg-brand-primary relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-sm text-white sm:h-12 sm:w-12 sm:text-base">
                        {step.id}
                      </div>

                      <div className="w-1/2 pl-8" />
                    </>
                  )}

                  {/* Right side cards (even numbers) */}
                  {step.id % 2 === 0 && (
                    <>
                      <div className="w-1/2 pr-8" />

                      {/* Number Circle */}
                      <div className="bg-brand-primary relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-sm text-white sm:h-12 sm:w-12 sm:text-base">
                        {step.id}
                      </div>

                      {/* Horizontal dashed line from center to card */}
                      <div className="absolute top-1/2 left-1/2 z-0 h-0.5 w-20 translate-x-4 -translate-y-px transform border-t-2 border-dashed border-gray-300" />

                      <div className="flex w-1/2 justify-start pl-16">
                        <div className="border-brand-primary relative z-10 flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
                          <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                            <step.icon size={22} />
                          </div>
                          <h3 className="font-red-rose text-start text-lg sm:text-xl">
                            {step.title}
                          </h3>
                          <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberCards;
