import { Zap } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CvpFeatureProps {
  heading: string;
  features: Feature[];
  ctaText?: string;
  ctaLink?: string;
}

const CvpFeature = ({
  heading,
  features,
  ctaText,
  ctaLink,
}: CvpFeatureProps) => {
  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
        </div>

        {/* Features Grid */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-brand-primary flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                <feature.icon size={20} />
              </div>
              <h3 className="font-red-rose text-lg">{feature.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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

export default CvpFeature;
