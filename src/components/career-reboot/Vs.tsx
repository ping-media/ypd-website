import { BASE_URL } from "@/lib/url";
import { CheckSquare, XSquare, Zap } from "lucide-react";
import Link from "next/link";

interface VsItem {
  label: string;
  type?: "tick" | "cross" | "text"; // type for middle columns
}

interface VsProps {
  heading: string;
  subheading?: string;
  leftTitle: string;
  midLeftTitle: string;
  midRightTitle: string;
  rightTitle: string;
  leftItems: string[];
  midLeftItems: VsItem[];
  midRightItems: VsItem[];
  rightItems: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function Vs({
  heading,
  subheading,
  leftTitle,
  midLeftTitle,
  midRightTitle,
  rightTitle,
  leftItems,
  midLeftItems,
  midRightItems,
  rightItems,
  ctaText,
  ctaLink,
}: VsProps) {
  return (
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-10">
        {/* Heading */}
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="text-brand-gray max-w-4xl text-base sm:text-lg">
              {subheading}
            </p>
          )}
        </div>

        {/* Scrollable / Responsive Section */}
        <div className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto max-xl:p-1 sm:gap-6 xl:grid xl:snap-none xl:grid-cols-[1fr_0.8fr_0.8fr_1.2fr] xl:items-stretch xl:gap-10 xl:overflow-visible">
          {/* Left Column */}
          <div className="flex min-w-0 flex-shrink-0 basis-[70%] snap-start flex-col overflow-hidden rounded-xl border border-gray-100 shadow sm:basis-auto">
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg break-words">
                {leftTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              {leftItems.map((item, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 sm:px-6 sm:py-4 ${
                    i !== leftItems.length - 1 ? "border-b border-gray-100" : ""
                  } ${i === leftItems.length - 1 ? "flex-1" : ""}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mid Left Column */}
          <div className="flex min-w-0 flex-shrink-0 basis-[60%] snap-start flex-col overflow-hidden rounded-xl border border-gray-100 shadow sm:basis-auto">
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg break-words">
                {midLeftTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col bg-white">
              {midLeftItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-4 ${
                    i !== midLeftItems.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  } ${i === midLeftItems.length - 1 ? "flex-1" : ""}`}
                >
                  {item.type === "tick" && (
                    <CheckSquare className="text-green-500" size={18} />
                  )}
                  {item.type === "cross" && (
                    <XSquare className="text-red-500" size={18} />
                  )}
                  <span className="flex-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mid Right Column */}
          <div className="flex min-w-0 flex-shrink-0 basis-[60%] snap-start flex-col overflow-hidden rounded-xl border border-gray-100 shadow sm:basis-auto">
            <div className="bg-gray-100 px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg break-words">
                {midRightTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col bg-white">
              {midRightItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-4 ${
                    i !== midRightItems.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  } ${i === midRightItems.length - 1 ? "flex-1" : ""}`}
                >
                  {item.type === "tick" && (
                    <CheckSquare className="text-green-500" size={18} />
                  )}
                  {item.type === "cross" && (
                    <XSquare className="text-red-500" size={18} />
                  )}
                  <span className="flex-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="border-brand-primary flex min-w-0 flex-shrink-0 basis-[80%] snap-start flex-col overflow-hidden rounded-xl border shadow sm:basis-auto">
            <div className="bg-brand-primary px-3 py-2 sm:px-6 sm:py-4">
              <h3 className="font-red-rose text-left text-lg break-words text-white">
                {rightTitle}
              </h3>
            </div>
            <div className="flex flex-1 flex-col">
              {rightItems.map((item, i) => (
                <div
                  key={i}
                  className={`bg-brand-bg flex flex-1 gap-2 px-3 py-2 sm:px-6 sm:py-4 ${
                    item.trim() === ""
                      ? "items-center justify-center"
                      : "items-start"
                  } ${
                    i !== rightItems.length - 1
                      ? "border-brand-primary/40 border-b"
                      : ""
                  }`}
                >
                  <CheckSquare
                    size={18}
                    className={`text-brand-primary flex-shrink-0 ${
                      item.trim() === "" ? "" : "mt-1"
                    }`}
                  />
                  {item.trim() !== "" && <span>{item}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {ctaText && ctaLink && (
          <Link
            href={`${BASE_URL}${ctaLink}`}
            className="btn-size btn-primary mx-auto font-medium shadow-sm"
          >
            <Zap size={18} /> {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
