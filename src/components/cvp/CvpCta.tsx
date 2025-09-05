"use client";
import { ReactNode, useState } from "react";
import { SquareCheck, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "outline";
  href: string;
}

interface CvpCtaProps {
  heading: string;
  subheading: string;
  description?: string;
  features?: string[];
  buttons: ButtonProps[];
  expandableFeatures?: boolean;
}

export default function CvpCta({
  heading,
  subheading,
  description,
  features,
  buttons,
  expandableFeatures = false,
}: CvpCtaProps) {
  // NEW: track how many features are visible
  const [visibleCount, setVisibleCount] = useState(3);

  const getDisplayedFeatures = () => {
    if (!features || !expandableFeatures) return features;
    return features.slice(0, visibleCount);
  };

  const displayedFeatures = getDisplayedFeatures();
  const hasMoreFeatures =
    features && expandableFeatures && visibleCount < features.length;

  const handleShowMore = () => {
    if (features) {
      setVisibleCount(
        (prev) => Math.min(prev + 2, features.length), // add 2 each click
      );
    }
  };

  const handleShowLess = () => {
    setVisibleCount(3); // reset back to 3
  };

  return (
    <section className="flex justify-center bg-[#F3FFF8] p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 px-4 text-center sm:px-0">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
        <p className="text-brand-gray text-sm sm:text-base">{subheading}</p>

        {/* Description OR Features */}
        {description ? (
          <p className="font-red-rose max-w-3xl text-lg sm:text-xl">
            {description}
          </p>
        ) : displayedFeatures && displayedFeatures.length > 0 ? (
          <div className="flex flex-col items-center gap-4">
            <ul
              className="flex flex-col items-start gap-4 overflow-hidden py-4 text-left transition-all duration-500 ease-in-out sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:py-10"
              style={{ maxHeight: `${displayedFeatures.length * 3}rem` }}
            >
              {displayedFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-base transition-opacity duration-500 sm:text-lg"
                >
                  <SquareCheck className="text-brand-primary bg-brand-bg h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Expand/Collapse Button */}
            {features && expandableFeatures && (
              <button
                onClick={hasMoreFeatures ? handleShowMore : handleShowLess}
                className="text-brand-primary hover:text-brand-primary/80 flex cursor-pointer items-center gap-2 font-medium transition-colors duration-200"
              >
                {hasMoreFeatures ? (
                  <>
                    <span>
                      Show More ({features.length - visibleCount} more)
                    </span>
                    <ChevronDown size={18} />
                  </>
                ) : visibleCount > 3 ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={18} />
                  </>
                ) : null}
              </button>
            )}
          </div>
        ) : null}

        {/* CTA Buttons */}
        <div className="mt-4 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-stretch">
          {buttons.map((btn, index) => (
            <Link
              href={btn.href}
              key={index}
              className={`btn-size flex cursor-pointer items-center justify-center gap-2 px-4 py-2 font-medium whitespace-nowrap ${
                btn.variant === "primary"
                  ? "btn-primary shadow-sm"
                  : "border border-black text-gray-800 hover:bg-green-100"
              } sm:flex-1`}
            >
              {btn.icon}
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
