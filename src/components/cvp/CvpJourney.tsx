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
    <section className="bg-brand-bg flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
            {description}
          </p>
        </div>

        {/* Steps + Image Section */}
        <div className="flex w-full max-w-7xl flex-col-reverse items-center gap-4 sm:gap-10 lg:flex-row">
          {/* Left: Numbered steps */}
          <div className="grid w-full flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start gap-4 rounded-lg border border-[#cce0cc] p-4"
              >
                {/* Number */}
                <div className="font-poppins shrink-0 text-4xl font-bold text-[#cce0cc] sm:text-5xl">
                  {step.id}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-red-rose inline-block border-b border-[#cce0cc] pb-1 text-base sm:text-xl">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[280px] w-full flex-1 overflow-hidden rounded-lg shadow-lg md:min-h-[400px]">
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
            className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
          >
            {ctaIcon}
            {ctaText}
          </Link>

          {footerText && (
            <h2 className="text-center text-base sm:text-lg">{footerText}</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default CvpJourney;
