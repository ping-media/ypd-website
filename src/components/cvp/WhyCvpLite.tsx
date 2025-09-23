import { BASE_URL } from "@/lib/url";
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
        <div className="grid w-full max-w-3xl grid-cols-1 items-stretch overflow-hidden rounded-xl shadow sm:grid-cols-2">
          {/* Avoid column */}
          <div className="flex h-full min-h-full flex-col rounded-t-xl border border-gray-100 sm:rounded-l-xl sm:rounded-tr-none sm:border-r-0">
            {/* Header */}
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg">{avoidTitle}</h3>
            </div>
            {/* Rows */}
            <div className="flex flex-1 flex-col">
              {avoid.map((item, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-white px-3 py-2 text-left sm:px-6 sm:py-4 ${
                    i !== avoid.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div className="border-brand-primary flex h-full min-h-full flex-col overflow-hidden rounded-b-xl border sm:rounded-r-xl sm:rounded-bl-none">
            {/* Header */}
            <div className="bg-brand-primary px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg text-white">
                {experienceTitle}
              </h3>
            </div>
            {/* Rows */}
            <div className="flex flex-1 flex-col">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className={`bg-brand-bg flex flex-1 items-start gap-2 px-3 py-2 text-left sm:px-6 sm:py-4 ${
                    i !== experience.length - 1
                      ? "border-brand-primary/40 border-b"
                      : ""
                  } ${
                    i === experience.length - 1
                      ? "rounded-b-xl sm:rounded-br-xl sm:rounded-bl-none"
                      : ""
                  }`}
                >
                  <CheckSquare
                    size={18}
                    className="text-brand-primary mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {ctaText && ctaLink && (
          <Link
            href={`${BASE_URL}${ctaLink}`}
            className="btn-size btn-primary font-medium shadow-sm"
          >
            <Zap size={18} /> {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
