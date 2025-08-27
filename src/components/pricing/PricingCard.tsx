import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceText?: string;
  period?: string;
  features: string[];
  highlight?: boolean;
}

const PricingCard = ({
  title,
  description,
  price,
  priceText = "Get Started",
  period,
  features,
  highlight = false,
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-2xl p-4 sm:p- lg:p-10 flex flex-col items-center text-center shadow-sm transition gap-6 sm:gap-8 lg:gap-10 border w-full h-full
    ${
      highlight
        ? "bg-[radial-gradient(circle_at_center,white_10%,#bbf7d0_180%)] shadow-md"
        : "bg-gradient-to-b from-white to-gray-50"
    }`}
    >
      {/* Title + Description */}
      <div className="text-start w-full flex flex-col gap-6 sm:gap-8">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-red-rose">
            {title}
          </h3>
          <p className="text-xs sm:text-sm mb-2 sm:mb-4">{description}</p>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-red-rose">
          {price}
          {period && (
            <span className="text-xs sm:text-sm lg:text-base font-red-rose text-brand-gray align-baseline">
              {" "}
              / {period}
            </span>
          )}
        </p>
      </div>

      {/* Button */}
      <Link
        href={"#"}
        className="w-full rounded-lg py-3 px-4 sm:py-3.5 sm:px-5 font-medium transition bg-green-50 border border-gray-300 text-sm sm:text-base lg:text-lg hover:bg-green-100"
      >
        {priceText}
      </Link>

      {/* Separator */}
      <div className="w-full border-t border-gray-200 my-3 sm:my-4"></div>

      {/* Features */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 text-start">
        <h4 className="text-xs sm:text-sm font-semibold text-gray-700">
          What you’ll get
        </h4>
        <ul className="text-xs sm:text-sm lg:text-base text-gray-600 flex flex-col gap-2 sm:gap-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary mt-0.5 flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
