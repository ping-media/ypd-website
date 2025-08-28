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
    <section className="flex justify-center bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:px-10 lg:py-16 xl:px-20 xl:py-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-8 text-center sm:gap-10 md:gap-12 lg:gap-16">
        {/* Heading */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-brand-gray px-2 text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
              {subheading}
            </p>
          )}
        </div>

        {/* Top Section (steps[0,1] left, image right) */}
        <div className="flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-16 xl:gap-20 2xl:gap-30">
          {/* Cards */}
          <div className="flex w-full flex-col items-stretch gap-6 sm:gap-8 lg:w-[45%] xl:w-[40%]">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.id}
                className="relative flex h-full w-full items-start gap-3 sm:gap-4"
              >
                {/* Number Circle */}
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black bg-white text-sm font-bold sm:mt-2 sm:h-12 sm:w-12 sm:text-base md:mt-4 lg:mt-6">
                  {step.id}
                </div>

                {/* Card */}
                <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-gray-200 bg-[#fdfdfd] p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-3 sm:rounded-2xl sm:p-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white sm:h-12 sm:w-12">
                    {step.icon}
                  </div>
                  <h3 className="font-red-rose text-start text-lg sm:text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-start text-xs leading-relaxed sm:text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src={images.first}
                alt={`${heading} preview 1`}
                fill
                className="rounded-2xl object-fill shadow-md sm:rounded-3xl lg:rounded-4xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section (image left, steps[2,3] right) */}
        <div className="flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:flex-row-reverse lg:gap-16 xl:gap-20 2xl:gap-30">
          {/* Cards */}
          <div className="flex w-full flex-col items-stretch gap-6 sm:gap-8 lg:w-[45%] xl:w-[40%]">
            {steps.slice(2).map((step) => (
              <div
                key={step.id}
                className="relative flex h-full w-full items-start gap-3 sm:gap-4"
              >
                {/* Number Circle */}
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black bg-white text-sm font-bold sm:mt-2 sm:h-12 sm:w-12 sm:text-base md:mt-4 lg:mt-6">
                  {step.id}
                </div>

                {/* Card */}
                <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-gray-200 bg-[#fefefe] p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-3 sm:rounded-2xl sm:p-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white sm:h-12 sm:w-12">
                    {step.icon}
                  </div>
                  <h3 className="font-red-rose text-start text-lg sm:text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-start text-xs leading-relaxed sm:text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[55%] xl:w-[60%]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src={images.second}
                alt={`${heading} preview 2`}
                fill
                className="rounded-2xl object-fill shadow-md sm:rounded-3xl lg:rounded-4xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
