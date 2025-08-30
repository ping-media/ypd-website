import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string | string[]; // can be text or bullet points
  icon: string;
}

interface StepSectionProps {
  heading: string;
  subheading?: string;
  steps: Step[];
  images: {
    first: string;
    second: string;
    others?: string[]; // extra images for >4 steps
  };
}

export default function StepSection({
  heading,
  subheading,
  steps,
  images,
}: StepSectionProps) {
  // Utility: render description
  const renderDescription = (desc: string | string[]) => {
    if (Array.isArray(desc)) {
      return (
        <ul className="text-brand-gray list-disc pl-5 text-start text-xs leading-relaxed sm:text-sm md:text-base">
          {desc.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-brand-gray text-start text-xs leading-relaxed sm:text-sm md:text-base">
        {desc}
      </p>
    );
  };

  // Utility: render one step card
  const renderStepCard = (step: Step) => (
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
          <Image
            src={step.icon}
            alt={step.title}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <h3 className="font-red-rose text-start text-lg sm:text-xl md:text-2xl">
          {step.title}
        </h3>
        {renderDescription(step.description)}
      </div>
    </div>
  );

  // Utility: render a section with 2 steps + image
  const renderSection = (
    sectionSteps: Step[],
    image: string,
    reverse: boolean,
    index: number,
  ) => (
    <div
      key={index}
      className={`flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:gap-16 xl:gap-20 2xl:gap-30`}
    >
      {/* Cards */}
      <div className="flex w-full flex-col items-stretch gap-6 sm:gap-8 lg:w-[45%] xl:w-[40%]">
        {sectionSteps.map((step) => renderStepCard(step))}
      </div>

      {/* Image */}
      <div className="w-full lg:w-[55%] xl:w-[60%]">
        <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[4/3]">
          <Image
            src={image}
            alt={`${heading} preview ${index + 1}`}
            fill
            className="rounded-2xl object-fill shadow-md sm:rounded-3xl lg:rounded-4xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
          />
        </div>
      </div>
    </div>
  );

  // Split steps into groups of 2
  const stepGroups: Step[][] = [];
  for (let i = 0; i < steps.length; i += 2) {
    stepGroups.push(steps.slice(i, i + 2));
  }

  // Gather images: first, second, then extra if provided
  const allImages = [images.first, images.second, ...(images.others || [])];

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

        {/* Sections */}
        {stepGroups.map((group, i) =>
          renderSection(group, allImages[i % allImages.length], i % 2 === 1, i),
        )}
      </div>
    </section>
  );
}
