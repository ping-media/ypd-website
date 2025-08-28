"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PricingCard from "./PricingCard";
import NoPlan from "./NoPlan";

const PricingPage = () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");
  const [program, setProgram] = useState<string>("");

  return (
    <section className="flex w-full justify-center p-4 pb-4 sm:px-10 sm:pb-10 lg:px-20 lg:pb-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-6 sm:gap-10">
        {/* Program Selector */}
        <div className="flex w-full max-w-7xl flex-col items-center gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Select Your Program
          </h2>
          <p className="text-brand-gray text-center text-base sm:text-lg">
            Choose from our range of career development solutions to see pricing
            tailored to your goals.
          </p>
          <div className="relative mt-3 w-full max-w-6xl">
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="text-brand-gray w-full appearance-none rounded-lg border border-gray-300 p-3 pr-10"
            >
              <option value="">Select Program</option>
              <option value="highschool">High School</option>
              <option value="college">College</option>
              <option value="professional">Professional</option>
            </select>
            {/* Icon */}
            <ChevronDown
              size={20}
              className="text-brand-gray pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Billing Toggle */}
        {program && (
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
              Choose Your Plan
            </h2>
            <p className="text-brand-gray text-center text-base sm:text-lg">
              Flexible plans that grow with you. Start for free, upgrade when
              ready.
            </p>

            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 text-sm font-medium transition sm:text-base ${
                  billing === "monthly"
                    ? "bg-brand-primary text-white"
                    : "bg-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annually")}
                className={`px-6 py-2 text-sm font-medium transition sm:text-base ${
                  billing === "annually"
                    ? "bg-brand-primary text-white"
                    : "bg-white"
                }`}
              >
                Annually
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards OR Fallback */}
        {program ? (
          <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <PricingCard
              title="Basic"
              description="Perfect to explore and get started"
              price="Free"
              features={[
                "10 AI chat messages/day",
                "Basic AI response model",
                "Limited access to features",
                "Community support",
                "No customization",
              ]}
            />

            <PricingCard
              title="Pro"
              description="For regular users who need more power"
              price={billing === "monthly" ? "$20" : "$200"}
              period={billing === "monthly" ? "month" : "year"}
              highlight
              features={[
                "Unlimited chat messages",
                "Priority AI response model",
                "Image and document upload",
                "Access to career mentor modules",
                "Basic analytics",
              ]}
            />

            <PricingCard
              title="Premium"
              description="For professionals, schools, or heavy users"
              price={billing === "monthly" ? "$120" : "$1200"}
              period={billing === "monthly" ? "month" : "year"}
              highlight
              features={[
                "Unlimited chat messages",
                "Priority AI response model",
                "Image and document upload",
                "Access to career mentor modules",
                "Email support",
              ]}
            />
          </div>
        ) : (
          <NoPlan />
        )}
      </div>
    </section>
  );
};

export default PricingPage;
