import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description?: string;
}

interface CvpInsideProps {
  heading: string;
  subheading?: string;
  features: Feature[];
  ctaText?: string;
  ctaLink?: string;
  ctaNote?: string;
}

const CvpInside: React.FC<CvpInsideProps> = ({
  heading,
  subheading,
  features,
  ctaText,
  ctaLink,
  ctaNote,
}) => {
  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-brand-gray max-w-4xl text-base sm:text-lg md:text-xl">
              {subheading}
            </p>
          )}
        </div>

        {/* === For XL and above: original 3 + 2 layout === */}
        <div className="hidden w-full flex-col gap-10 xl:flex">
          {/* First 3 cards */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="border-brand-primary flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-start text-lg sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="border-brand-primary flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:w-[320px] sm:p-8 md:w-[360px]"
              >
                <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-start text-lg sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === For below XL: single responsive grid === */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-brand-primary flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
            >
              <div className="text-brand-primary flex h-12 w-12 items-center justify-center rounded-md bg-green-50">
                <feature.icon size={22} />
              </div>
              <h3 className="font-red-rose text-start text-lg sm:text-xl">
                {feature.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {(ctaText || ctaNote) && (
          <div className="flex flex-col items-center gap-4">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
              >
                <Zap size={18} /> {ctaText}
              </Link>
            )}
            {ctaNote && (
              <p className="text-brand-gray mx-auto mt-2 max-w-3xl text-center text-sm sm:text-base">
                {ctaNote}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CvpInside;
