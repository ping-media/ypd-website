import { BASE_URL } from "@/lib/url";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  href: string;
}

interface FeatureSection {
  sectionTitle?: string;
  items: Feature[];
}

type FeaturesInput = Feature[] | FeatureSection[];

interface CrSuiteProps {
  heading: string;
  subheading?: string;
  features: FeaturesInput;
}

export default function CrSuite({
  heading,
  subheading,
  features,
}: CrSuiteProps) {
  const isGrouped = (features as FeatureSection[])[0]?.items !== undefined;

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

        {/* Render Sections */}
        {isGrouped ? (
          (features as FeatureSection[]).map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {section.sectionTitle && (
                <h3 className="font-red-rose text-left text-lg sm:text-xl lg:text-2xl">
                  {section.sectionTitle}
                </h3>
              )}
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((f, i) => renderCard(f, i))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(features as Feature[]).map((f, i) => renderCard(f, i))}
          </div>
        )}
      </div>
    </section>
  );
}

// ✅ helper function to render a card
function renderCard(f: Feature, i: number) {
  return (
    <div
      key={i}
      className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 text-center transition duration-300 hover:shadow-md sm:p-8"
    >
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
      {/* CTA */}
      <Link
        href={`${BASE_URL}${f.href}`}
        className="btn-size btn-primary mt-6 flex items-center justify-center gap-2"
      >
        <Zap size={18} className="text-white" />
        {f.ctaText}
      </Link>
    </div>
  );
}
