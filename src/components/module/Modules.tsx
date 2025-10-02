import Image from "next/image";
import Link from "next/link";
import { SquareCheck, Sparkles } from "lucide-react";

interface Step {
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  icon?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ModulesProps {
  subheading?: string;
  steps: Step[];
  images: {
    first: string;
    second: string;
    others?: string[];
  };
}

export default function Modules({ steps, images }: ModulesProps) {
  // Render one step card
  const renderStepCard = (step: Step) => (
    <div
      key={step.title}
      className="flex h-full w-full flex-col gap-4 rounded-xl p-6 sm:rounded-2xl sm:p-8"
    >
      <h2 className="font-red-rose text-left text-xl leading-snug sm:text-2xl lg:text-3xl">
        {step.title}
      </h2>

      {step.subtitle && (
        <p className="text-brand-gray text-left text-base sm:text-lg">
          {step.subtitle}
        </p>
      )}

      {step.description && (
        <p className="text-brand-gray text-sm sm:text-base">
          {step.description}
        </p>
      )}

      {step.features && (
        <ul className="flex flex-col gap-3 text-sm sm:gap-4 sm:text-base">
          {step.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <SquareCheck className="text-brand-primary mt-1 h-5 w-5 shrink-0" />
              <span className="text-left">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      {step.buttonText && step.buttonLink && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link
            href={step.buttonLink}
            className="btn-size btn-primary inline-flex items-center gap-2 shadow"
          >
            <Sparkles className="h-5 w-5" />
            {step.buttonText}
          </Link>
        </div>
      )}
    </div>
  );

  // Split into single-step groups
  const stepGroups: Step[][] = steps.map((s) => [s]);

  // Images array
  const allImages = [images.first, images.second, ...(images.others || [])];

  return (
    <section className="flex justify-center bg-gray-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:px-10 lg:py-16 xl:px-20 xl:py-20">
      <div className="font-lato relative flex w-full max-w-[1440px] flex-col items-center gap-8 text-center sm:gap-10 md:gap-12 lg:gap-16">
        {/* Sections */}
        <div className="relative z-10 flex w-full flex-col gap-12 lg:gap-20">
          {stepGroups.map((group, i) => {
            const reverse = i % 2 === 1; // alternate layout
            return (
              <div
                key={i}
                className={`flex w-full flex-col items-center gap-8 lg:gap-16 xl:gap-20 ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Card */}
                <div className="w-full lg:w-[45%] xl:w-[40%]">
                  {group.map((step) => renderStepCard(step))}
                </div>

                {/* Image */}
                <div className="w-full lg:w-[55%] xl:w-[60%]">
                  <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[4/3]">
                    <Image
                      src={allImages[i % allImages.length]}
                      alt={`preview ${i + 1}`}
                      fill
                      className="rounded-2xl object-fill shadow-md sm:rounded-3xl lg:rounded-4xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 60vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
