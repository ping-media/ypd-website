import Image from "next/image";

interface Step {
  number?: number;
  id?: number;
  title: string;
  description: string;
}

interface CvpStepsProps {
  steps?: Step[];
  heading?: string;
  subheading?: string;
}

const CvpSteps = ({
  steps = [
    {
      number: 1,
      title: "Intent Mapping",
      description:
        "Adaptive & Personalized mapping of your interest & passion, Cognitive Strengths, Social & Emotional quotient, Preferences and more.",
    },
    {
      number: 2,
      title: "Benchmarking",
      description:
        "Evaluates your career choice readiness with real job skills.",
    },
    {
      number: 3,
      title: "Gap Detection",
      description:
        "Identifies gaps, aptitudes, builds bridges, shows transferable skills.",
    },
    {
      number: 4,
      title: "Fit Analysis",
      description:
        "Matches your career pathway to your interest & passion, identifies alternate pathways for a holistic recommendation.",
    },
    {
      number: 5,
      title: "Learning Path Activation",
      description:
        "Unlocks your career needs, required courses, certifications with highest accuracy.",
    },
  ],
  heading = "The Career Vision Program™: 5 Steps to Career Pathway",
  subheading = "YPD doesn&apos;t just assess. It takes you through a 360° mapping process through its framework, Trained AI Mentors, Active User participation using adaptive & personalized journey to build what truly fits you.",
}: CvpStepsProps) => {
  return (
    <div className="font-lato flex justify-center bg-[#FAFAFA] p-4 sm:p-10 lg:p-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
            {subheading}
          </p>
        </div>

        {/* Content */}
        <div className="flex w-full max-w-7xl flex-col gap-4 sm:gap-10 lg:flex-row lg:items-stretch lg:gap-14">
          {/* Image */}
          <div className="flex w-full items-center justify-center overflow-hidden rounded-lg lg:w-1/2">
            <div className="relative h-[400px] w-full max-w-md sm:h-[500px] sm:max-w-lg lg:h-full lg:max-w-none">
              <Image
                src="/step.png"
                alt="Steps"
                fill
                sizes="(max-width: 640px) 384px, (max-width: 1024px) 512px, 50vw"
                className="object-contain lg:object-cover"
                priority
              />
            </div>
          </div>

          {/* Steps */}
          <div className="line-element relative flex w-full flex-col justify-center gap-4 sm:gap-8 lg:w-1/2 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex w-full items-center gap-4 sm:gap-10"
              >
                {/* Number + connector */}
                <div className="relative flex flex-col items-center">
                  <div className="bg-brand-primary relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-sm text-white sm:h-12 sm:w-12 sm:text-base">
                    {step.number ?? step.id ?? i + 1}
                    <div className="border-brand-gray absolute top-1/2 left-full hidden w-10 border-t-2 border-dashed sm:block"></div>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex w-full flex-col gap-1 rounded-lg bg-white p-4 shadow-sm sm:gap-2 sm:p-5">
                  <h3 className="font-red-rose text-lg sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-sm sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvpSteps;
