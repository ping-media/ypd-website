import Image from "next/image";

const CvpSteps = () => {
  const steps = [
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
  ];

  return (
    <div className="font-lato flex justify-center bg-[#FAFAFA] p-4 sm:p-10 lg:p-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            The Career Vision Program™: 5 Steps to Career Pathway
          </h2>
          <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
            YPD doesn&apos;t just assess. It takes you through a 360° mapping
            process through its framework, Trained AI Mentors, Active User
            participation using adaptive & personalized journey to build what
            truly fits you.
          </p>
        </div>

        {/* Content */}
        <div className="flex w-full max-w-7xl flex-col justify-between gap-4 sm:gap-10 lg:flex-row lg:gap-14">
          {/* Image */}
          <div className="flex w-full flex-shrink-0 justify-center lg:w-[526px]">
            <Image
              src="/step.png"
              alt="Steps"
              width={526}
              height={726}
              className="h-auto w-full max-w-[400px] object-center lg:max-w-none"
            />
          </div>

          {/* Steps */}
          <div className="line-element relative flex w-full flex-col items-center gap-4 sm:gap-8 lg:w-[694px] lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex w-full items-center gap-4 sm:gap-10"
              >
                {/* Number + connector */}
                <div className="relative flex flex-col items-center">
                  {/* Number block */}
                  <div className="bg-brand-primary relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-sm text-white sm:h-12 sm:w-12 sm:text-base">
                    {step.number}
                    {/* Horizontal line */}
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
