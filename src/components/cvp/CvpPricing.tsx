import Link from "next/link";
import PricingCard from "../pricing/PricingCard";

const CvpPricing = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-2 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Pricing & Access
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            CareerVerse™ is a premium experience made affordable.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-5xl">
          {/* Free Plan */}
          <div className="w-[380px] h-full flex-shrink-0">
            <PricingCard
              title="Free Plan"
              description="For students starting their journey"
              price="₹0"
              features={[
                "Basic profile setup (Step 0)",
                "Interest Preview (Step 1 – partial access)",
                "AI summary of interest clusters",
                "No report or stream recommendation",
                "Locked after preview, upgrade anytime",
                "Best for students who want to 'try before they trust.'",
              ]}
            />
          </div>

          {/* Premium Plan */}
          <div className="w-[400px] flex-shrink-0">
            <PricingCard
              title="Premium Plan"
              description="Complete your full Career Persona Journey"
              price="₹899"
              priceText="Start My Career Simulation"
              features={[
                "Full access",
                "Strengths, learning style & thinking profile",
                "Passion & fit analysis",
                "Cognitive & ethical intelligence insights",
                "Career direction bridge & education roadmap",
                "Personal Action Plan",
                "Downloadable Final Career Persona Report (Step 10)",
                "Lifetime access via your YPD login",
                "Built for Class 9–12 students who want trusted, structured clarity",
              ]}
              highlight
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <h2 className=" text-base sm:text-lg text-center font-semibold">
            Institutional Pricing Available. Please{" "}
            <Link
              href={"/contact"}
              className=" border-b-brand-primary border border-x-0 border-t-0 text-brand-primary hover:text-brand-primary/80 "
            >
              Contact Us
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CvpPricing;
