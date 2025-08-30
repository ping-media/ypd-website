import { ReactNode } from "react";
import { SquareCheck } from "lucide-react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "outline";
}

interface CvpCtaProps {
  heading: string;
  subheading: string;
  description?: string; // optional now
  features?: string[]; // optional list of features
  buttons: ButtonProps[];
}

export default function CvpCta({
  heading,
  subheading,
  description,
  features,
  buttons,
}: CvpCtaProps) {
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
        ) : features ? (
          <ul className="flex flex-wrap justify-center gap-6 py-4 text-left sm:py-10">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-base sm:text-lg"
              >
                <SquareCheck className="text-brand-primary bg-brand-bg h-5 w-5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}

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
