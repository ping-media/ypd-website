import { Zap } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CareersFeatureProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
  ctaText?: string;
  ctaLink?: string;
}

const CareersFeature = ({
  heading,
  subheading,
  features,
  ctaText,
  ctaLink,
}: CareersFeatureProps) => {
  return (
    <section className="flex justify-center bg-white p-4 sm:px-10 sm:py-5 lg:px-20 lg:py-10">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Heading */}
        {(heading || subheading) && (
          <div className="flex flex-col items-center gap-2 text-center">
            {heading && (
              <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
            )}
            {subheading && (
              <p className="text-brand-gray text-sm sm:text-base lg:text-lg">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Features Layout */}
        <div className="flex w-full max-w-7xl flex-col gap-4">
          {/* All features in 2x2 grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-brand-accent flex items-start gap-4 rounded-lg border bg-white p-5 shadow-lg"
              >
                <div className="text-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                  <feature.icon size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-red-rose text-lg">{feature.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={ctaLink}
              className="btn-size btn-primary font-medium shadow-sm"
            >
              <Zap size={18} /> {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersFeature;
