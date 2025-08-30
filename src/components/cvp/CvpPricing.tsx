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
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-0">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-brand-gray max-w-4xl text-sm sm:text-base lg:text-lg">
            {subheading}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex w-full max-w-5xl flex-col items-stretch justify-center gap-6 max-sm:flex-col sm:flex-row sm:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex w-full flex-1 flex-col sm:w-1/2">
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
            <h2 className="text-center text-sm font-semibold sm:text-base lg:text-lg">
              {footerText}{" "}
              {footerLink && (
                <Link
                  href={footerLink.href}
                  className="border-b-brand-primary text-brand-primary hover:text-brand-primary/80 border-b"
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
