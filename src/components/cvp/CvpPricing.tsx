"use client";

import Link from "next/link";
import PricingCard from "../pricing/PricingCard";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  priceText?: string;
  features: string[];
  highlight?: boolean;
}

interface CvpPricingProps {
  heading: string;
  subheading: string;
  plans: PricingPlan[];
  footerText?: string;
  footerLink?: {
    text: string;
    href: string;
  };
}

const CvpPricing = ({
  heading,
  subheading,
  plans,
  footerText,
  footerLink,
}: CvpPricingProps) => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center px-4 sm:px-0">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray max-w-4xl">
            {subheading}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col max-sm:flex-col sm:flex-row justify-center gap-6 sm:gap-8 w-full max-w-5xl items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 flex flex-col flex-1">
              <PricingCard
                title={plan.title}
                description={plan.description}
                price={plan.price}
                priceText={plan.priceText}
                features={plan.features}
                highlight={plan.highlight}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        {(footerText || footerLink) && (
          <div className="flex flex-col items-center gap-6 px-4 sm:px-0">
            <h2 className="text-sm sm:text-base lg:text-lg text-center font-semibold">
              {footerText}{" "}
              {footerLink && (
                <Link
                  href={footerLink.href}
                  className="border-b border-b-brand-primary text-brand-primary hover:text-brand-primary/80"
                >
                  {footerLink.text}
                </Link>
              )}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default CvpPricing;
