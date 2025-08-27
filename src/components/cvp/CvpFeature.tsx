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
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center bg-white">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-brand-primary">
                <feature.icon size={20} />
              </div>
              <h3 className="font-red-rose text-lg">{feature.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href={ctaLink}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium shadow-sm transition-colors"
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
