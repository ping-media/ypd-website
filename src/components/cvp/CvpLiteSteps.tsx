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
      <div
        className="relative z-10 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black bg-white text-sm font-bold sm:mt-2 sm:h-12 sm:w-12 sm:text-base md:mt-4 lg:mt-6"
        id={`step-${step.id}`}
      >
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
      } relative lg:gap-16 xl:gap-20 2xl:gap-30`}
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
      <div className="font-lato relative flex w-full max-w-[1440px] flex-col items-center gap-8 text-center sm:gap-10 md:gap-12 lg:gap-16">
        {/* Dashed connecting line - hidden on mobile, visible on lg+ */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* LG to XL screens */}
          <path
            d="M 2 18 L 2 54 Q 2 56 4 56 L 58 56 Q 60 56 60 58 L 60 82"
            className="lg:block xl:hidden"
            stroke="#006400"
            strokeWidth="0.3"
            strokeDasharray="1,0.5"
            fill="none"
          />

          {/* XL+ screens */}
          <path
            d="M 2 18 L 2 54 Q 2 56 4 56 L 63 56 Q 65 56 65 58 L 65 82"
            className="hidden xl:block"
            stroke="#006400"
            strokeWidth="0.3"
            strokeDasharray="1,0.5"
            fill="none"
          />
        </svg>

        {/* Heading */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:gap-4">
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
        <div className="relative z-10 flex w-full flex-col gap-8 sm:gap-10 md:gap-16 lg:gap-24">
          {stepGroups.map((group, i) =>
            renderSection(
              group,
              allImages[i % allImages.length],
              i % 2 === 1,
              i,
            ),
          )}
        </div>
      </div>
    </section>
  );
}
