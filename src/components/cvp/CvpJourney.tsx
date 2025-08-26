"use client";

import Image from "next/image";
import Link from "next/link";

interface JourneyStep {
  id: string;
  text: string;
}

interface CvpJourneyProps {
  heading: string;
  description: string;
  steps: JourneyStep[];
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  ctaIcon?: React.ReactNode;
  footerText?: string;
}

const CvpJourney = ({
  heading,
  description,
  steps,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
  ctaIcon,
  footerText,
}: CvpJourneyProps) => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-brand-bg flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            {description}
          </p>
        </div>

        {/* Steps + Image Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-10 items-center w-full max-w-7xl">
          {/* Left: Numbered steps */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start gap-4 p-4 border border-[#cce0cc] rounded-lg"
              >
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-poppins font-bold text-[#cce0cc] shrink-0">
                  {step.id}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-base sm:text-xl font-red-rose inline-block border-b border-[#cce0cc] pb-1">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg w-full min-h-[280px] md:min-h-[400px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            {ctaIcon}
            {ctaText}
          </Link>

          {footerText && (
            <h2 className="text-base sm:text-lg text-center">{footerText}</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default CvpJourney;
