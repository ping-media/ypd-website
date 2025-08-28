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
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-6 text-center sm:gap-10">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Comparison Card */}
        <div className="grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-xl shadow sm:grid-cols-2">
          {/* Avoid column */}
          <div className="flex flex-col overflow-hidden rounded-t-xl border border-gray-100 sm:rounded-l-xl sm:rounded-tr-none">
            {/* Header */}
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg">{avoidTitle}</h3>
            </div>
            {/* Rows */}
            {avoid.map((item, i) => (
              <div
                key={i}
                className={`bg-white px-3 py-2 text-left sm:px-6 sm:py-4 ${i !== avoid.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Experience column */}
          <div className="border-brand-primary flex flex-col overflow-hidden rounded-b-xl border sm:rounded-tl-none sm:rounded-r-xl sm:rounded-bl-none">
            {/* Header */}
            <div className="bg-brand-primary px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg text-white">
                {experienceTitle}
              </h3>
            </div>
            {/* Rows */}
            {experience.map((item, i) => (
              <div
                key={i}
                className={`bg-brand-bg flex items-start gap-2 px-3 py-2 text-left sm:px-6 sm:py-4 ${
                  i !== experience.length - 1
                    ? "border-brand-primary/40 border-b"
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
            className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
          >
            <Zap size={18} /> {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
