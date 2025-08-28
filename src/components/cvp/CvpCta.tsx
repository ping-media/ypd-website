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
    <section className="flex justify-center bg-[#F3FFF8] p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 px-4 text-center sm:px-0">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
        <p className="text-brand-gray text-sm sm:text-base">{subheading}</p>

        {/* Description */}
        <p className="font-red-rose max-w-3xl text-lg sm:text-xl">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors sm:w-auto sm:px-5 sm:py-3.5 sm:text-base lg:text-lg ${
                btn.variant === "primary"
                  ? "bg-brand-primary hover:bg-brand-primary/90 text-white shadow-sm"
                  : "border border-black text-gray-800 hover:bg-green-100"
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
