import { CheckSquare, Zap } from "lucide-react";
import Link from "next/link";

interface WhyCvpLiteProps {
  heading: string;
  subheading?: string;
  avoidTitle: string;
  experienceTitle: string;
  avoid: string[];
  experience: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function WhyCvpLite({
  heading,
  subheading,
  avoidTitle,
  experienceTitle,
  avoid,
  experience,
  ctaText,
  ctaLink,
}: WhyCvpLiteProps) {
  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-6 sm:gap-10 text-center font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
              {subheading}
            </p>
          )}
        </div>

        {/* Comparison Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-3xl rounded-xl shadow overflow-hidden">
          {/* Avoid column */}
          <div className="flex flex-col border border-gray-100 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-lg text-left">{avoidTitle}</h3>
            </div>
            {/* Rows */}
            {avoid.map((item, i) => (
              <div
                key={i}
                className={`bg-white px-3 py-2 sm:px-6 sm:py-4 text-left 
              ${i !== avoid.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Experience column */}
          <div className="flex flex-col border border-brand-primary rounded-b-xl sm:rounded-r-xl sm:rounded-tl-none sm:rounded-bl-none overflow-hidden">
            {/* Header */}
            <div className="bg-brand-primary px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-lg text-white text-left">
                {experienceTitle}
              </h3>
            </div>
            {/* Rows */}
            {experience.map((item, i) => (
              <div
                key={i}
                className={`bg-brand-bg px-3 py-2 sm:px-6 sm:py-4 flex items-start gap-2 text-left
                ${
                  i !== experience.length - 1
                    ? "border-b border-brand-primary/40"
                    : ""
                }`}
              >
                <CheckSquare size={18} className="text-brand-primary mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="flex items-center justify-center gap-2 rounded-lg bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
