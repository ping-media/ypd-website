"use client";

import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "outline";
}

interface CvpCtaProps {
  heading: string;
  subheading: string;
  description: string;
  buttons: ButtonProps[];
}

export default function CvpCta({
  heading,
  subheading,
  description,
  buttons,
}: CvpCtaProps) {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center bg-[#F3FFF8]">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 text-center font-lato px-4 sm:px-0">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
        <p className="text-sm sm:text-base text-brand-gray">{subheading}</p>

        {/* Description */}
        <p className="text-lg sm:text-xl max-w-3xl font-red-rose">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`inline-flex items-center justify-center gap-2 rounded-lg text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium transition-colors w-full sm:w-auto ${
                btn.variant === "primary"
                  ? "bg-brand-primary hover:bg-brand-primary/90 text-white shadow-sm"
                  : "border border-black hover:bg-green-100 text-gray-800"
              }`}
            >
              {btn.icon}
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
