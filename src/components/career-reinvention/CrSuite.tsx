import { Zap } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  href: string; // ✅ added href
}

interface CrSuiteProps {
  heading: string;
  subheading?: string;
  features: Feature[];
}

export default function CrSuite({
  heading,
  subheading,
  features,
}: CrSuiteProps) {
  return (
    <section className="flex justify-center bg-gray-50 p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
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

        {/* Features Grid */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 text-center transition duration-300 hover:shadow-md sm:p-8"
            >
              {/* Top Content */}
              <div className="flex flex-grow flex-col gap-4">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="font-red-rose text-brand-primary text-lg sm:text-xl lg:text-2xl">
                  {f.title}
                </h3>

                {/* Subtitle */}
                <p className="text-brand-primary text-sm font-medium sm:text-base">
                  {f.subtitle}
                </p>

                {/* Features List */}
                <ul className="mt-2 flex flex-col items-start gap-1 text-left text-sm text-gray-600 sm:text-base">
                  {f.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <Link
                href={f.href} // ✅ uses href from data
                className="btn-size btn-primary mt-6 flex items-center justify-center gap-2"
              >
                <Zap size={18} className="text-white" />
                {f.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
