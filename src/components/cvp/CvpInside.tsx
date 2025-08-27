import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
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
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center bg-brand-bg">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-4xl">
              {subheading}
            </p>
          )}
        </div>

        {/* === For XL and above: original 3 + 2 layout === */}
        <div className="w-full hidden xl:flex flex-col gap-10">
          {/* First 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full sm:w-[320px] md:w-[360px]"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* === For below XL: single responsive grid === */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 xl:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full"
            >
              <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                <feature.icon size={22} />
              </div>
              <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        {(ctaText || ctaNote) && (
          <div className="flex flex-col items-center gap-4">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium shadow-sm transition-colors"
              >
                <Zap size={18} /> {ctaText}
              </Link>
            )}
            {ctaNote && (
              <p className="text-sm sm:text-base text-brand-gray mt-2 text-center max-w-3xl mx-auto">
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
