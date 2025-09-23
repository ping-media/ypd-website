import { BASE_URL } from "@/lib/url";
import { CheckSquare, Zap } from "lucide-react";
import Link from "next/link";

interface TablesProps {
  heading: string;
  subheading?: string;
  avoidTitle: string;
  experienceTitle: string;
  trackTitle?: string;
  avoid: string[];
  experience: string[];
  track: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function Tables({
  heading,
  subheading,
  avoidTitle,
  experienceTitle,
  trackTitle,
  avoid,
  experience,
  track,
  ctaText,
  ctaLink,
}: TablesProps) {
  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-10">
        {/* Heading */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Content: Track (left) + gap + Comparison (right) */}
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-4 sm:grid-cols-[30%_1fr] sm:gap-6 lg:gap-10">
          {/* Track card (left) */}
          <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 shadow">
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg">{trackTitle}</h3>
            </div>
            <div className="flex flex-1 flex-col">
              {track.map((item, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-white px-3 py-2 text-left sm:px-6 sm:py-4 ${
                    i !== track.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison card (right) - 30% + 40% */}
          <div className="grid w-full grid-cols-1 items-stretch overflow-hidden rounded-xl shadow sm:grid-cols-[45%_55%]">
            {/* Avoid column */}
            <div className="flex h-full min-h-full flex-col rounded-t-xl border border-gray-100 sm:rounded-l-xl sm:rounded-tr-none sm:border-r-0">
              {/* Header */}
              <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
                <h3 className="font-red-rose text-left text-lg">
                  {avoidTitle}
                </h3>
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
            <div className="border-brand-primary flex flex-col overflow-hidden border max-sm:rounded-b-xl sm:rounded-r-xl">
              <div className="bg-brand-primary px-3 py-2 sm:px-6 sm:py-4">
                <h3 className="font-red-rose text-left text-lg text-white">
                  {experienceTitle}
                </h3>
              </div>
              <div className="flex flex-1 flex-col overflow-hidden">
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className={`bg-brand-bg flex items-start gap-2 px-3 py-2 text-left sm:px-6 sm:py-4 ${
                      i !== experience.length - 1
                        ? "border-brand-primary/40 border-b"
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
        </div>

        {/* CTA */}
        {ctaText && ctaLink && (
          <Link
            href={`${BASE_URL}${ctaLink}`}
            className="bg-brand-primary border-brand-accent hover:bg-brand-primary/90 mx-auto flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
          >
            <Zap size={18} /> {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
