import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode; // 👈 changed to ReactNode
}

interface StepSectionProps {
  heading: string;
  subheading?: string;
  steps: Step[];
  images: {
    first: string;
    second: string;
  };
}

export default function StepSection({
  heading,
  subheading,
  steps,
  images,
}: StepSectionProps) {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:px-10 lg:py-16 xl:px-20 xl:py-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-center font-lato">
        {/* Heading */}
        <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-3 sm:gap-4 text-center">
          <h2 className="font-red-rose text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-gray leading-relaxed px-2">
              {subheading}
            </p>
          )}
        </div>

        {/* Top Section (steps[0,1] left, image right) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-30 w-full">
          {/* Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[45%] xl:w-[40%] items-stretch">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.id}
                className="relative flex items-start gap-3 sm:gap-4 h-full w-full"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 mt-1 sm:mt-2 md:mt-4 lg:mt-6 rounded-full border border-black flex items-center justify-center font-bold text-sm sm:text-base bg-white">
                  {step.id}
                </div>

                {/* Card */}
                <div className="border border-gray-200 rounded-xl sm:rounded-2xl bg-[#fdfdfd] shadow-sm p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200 h-full w-full">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-red-rose text-lg sm:text-xl md:text-2xl text-start">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-brand-gray leading-relaxed text-start">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src={images.first}
                alt={`${heading} preview 1`}
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-md object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section (image left, steps[2,3] right) */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-30 lg:flex-row-reverse w-full">
          {/* Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[45%] xl:w-[40%] items-stretch">
            {steps.slice(2).map((step) => (
              <div
                key={step.id}
                className="relative flex items-start gap-3 sm:gap-4 h-full w-full"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 mt-1 sm:mt-2 md:mt-4 lg:mt-6 rounded-full border border-black flex items-center justify-center font-bold text-sm sm:text-base bg-white">
                  {step.id}
                </div>

                {/* Card */}
                <div className="border border-gray-200 rounded-xl sm:rounded-2xl bg-[#fefefe] shadow-sm p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200 h-full w-full">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-red-rose text-lg sm:text-xl md:text-2xl text-start">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-brand-gray leading-relaxed text-start">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src={images.second}
                alt={`${heading} preview 2`}
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-md object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
