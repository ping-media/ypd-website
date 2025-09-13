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
      className={`sm:p- flex h-full w-full flex-col items-center gap-6 rounded-2xl border p-4 text-center shadow-sm transition sm:gap-8 lg:gap-10 lg:p-10 ${
        highlight
          ? "bg-[radial-gradient(circle_at_center,white_10%,#bbf7d0_180%)] shadow-md"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      {/* Title + Description */}
      <div className="flex w-full flex-col gap-6 text-start sm:gap-8">
        <div>
          <h3 className="font-red-rose text-base sm:text-lg lg:text-xl">
            {title}
          </h3>
          <p className="mb-2 text-xs sm:mb-4 sm:text-sm">{description}</p>
        </div>
        <p className="font-red-rose text-3xl sm:text-4xl lg:text-5xl">
          {price}
          {period && (
            <span className="font-red-rose text-brand-gray align-baseline text-xs sm:text-sm lg:text-base">
              {" "}
              / {period}
            </span>
          )}
        </p>
      </div>

      {/* Button */}
      <Link
        href={"/coming-soon"}
        className="btn-size w-full border-gray-300 bg-green-50 font-medium hover:bg-green-100"
      >
        {priceText}
      </Link>

      {/* Separator */}
      <div className="my-3 w-full border-t border-gray-200 sm:my-4"></div>

      {/* Features */}
      <div className="flex w-full flex-col gap-3 text-start sm:gap-4">
        <h4 className="text-xs font-semibold text-gray-700 sm:text-sm">
          What you’ll get
        </h4>
        <ul className="flex flex-col gap-2 text-xs text-gray-600 sm:gap-3 sm:text-sm lg:text-base">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="text-brand-primary mt-0.5 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
