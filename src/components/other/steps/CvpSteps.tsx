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
    <div className="p-4 sm:p-10 lg:p-20 bg-[#FAFAFA] flex justify-center font-lato">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            The Career Vision Program™: 5 Steps to Career Pathway
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            YPD doesn&apos;t just assess. It takes you through a 360° mapping
            process through its framework, Trained AI Mentors, Active User
            participation using adaptive & personalized journey to build what
            truly fits you.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-10 lg:gap-14">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-[526px] flex justify-center">
            <Image
              src="/step.png"
              alt="Steps"
              width={526}
              height={726}
              className="w-full max-w-[400px] lg:max-w-none h-auto object-center"
            />
          </div>

          {/* Steps */}
          <div className="w-full lg:w-[694px] flex flex-col items-center gap-4 sm:gap-8 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center w-full gap-4 sm:gap-10 relative"
              >
                {/* Number + connector */}
                <div className="flex flex-col items-center relative">
                  {/* Number block */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-primary flex items-center justify-center text-white relative z-10 text-sm sm:text-base">
                    {step.number}
                    {/* Horizontal line */}
                    <div className="hidden sm:block absolute left-full top-1/2 w-10 border-t-2 border-dashed border-brand-gray"></div>
                  </div>

                  {/* Vertical dashed line */}
                  {i !== steps.length - 1 && (
                    <div className="w-px flex-1 border-l-2 border-dashed border-brand-gray"></div>
                  )}
                </div>

                {/* Text content */}
                <div className="bg-white w-full p-4 sm:p-5 rounded-lg shadow-sm flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-lg sm:text-2xl font-red-rose">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-brand-gray">
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
