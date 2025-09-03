import React from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface NumberCardsProps {
  steps: Step[];
  heading: string;
  subheading?: string;
  bgClassName?: string; // customizable background
}

const NumberCards: React.FC<NumberCardsProps> = ({
  steps,
  heading,
  subheading,
  bgClassName = "bg-brand-bg",
}) => {
  return (
    <section
      className={`${bgClassName} flex justify-center p-4 sm:p-10 lg:p-20`}
    >
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-12">
        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-xl sm:text-2xl lg:text-3xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
              {subheading}
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-center">
                {/* Vertical line segment - only show between current and next step */}
                {index < steps.length - 1 && (
                  <div className="absolute top-28 left-1/2 hidden h-[calc(100%+1rem)] w-0.5 -translate-x-px transform border-l-2 border-dashed border-gray-300 md:block lg:top-24 lg:h-[calc(100%+1.5rem)]" />
                )}

                {/* Mobile Layout */}
                <div className="flex w-full items-center md:hidden">
                  {/* Number Circle */}
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
