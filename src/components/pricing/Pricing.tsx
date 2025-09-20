"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PricingCard from "./PricingCard";
import NoPlan from "./NoPlan";
import { pricingData, BillingCycle, Plan, Currency } from "./prices";
import { getPrice } from "@/lib/getPrice";

interface Props {
  currency: Currency;
}

const PricingPage = ({ currency }: Props) => {
  const [program, setProgram] = useState<string>("");
  const [billing, setBilling] = useState<BillingCycle>("one-time");

  const product = program ? pricingData[program] : null;

  const availablePlans: Plan[] =
    product && product.plans[billing]
      ? product.plans[billing]!
      : product
        ? product.plans[product.billingTypes[0]] || []
        : [];

  return (
    <section className="flex w-full justify-center p-4 pb-4 sm:px-10 sm:pb-10 lg:px-20 lg:pb-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-6 sm:gap-10">
        {/* Program Selector */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Select Your Program
          </h2>
          <div className="relative mt-3 w-full max-w-6xl">
            <select
              value={program}
              onChange={(e) => {
                const selected = e.target.value;
                setProgram(selected);

                if (selected) {
                  // ✅ pick product’s first billing type automatically
                  const firstBilling = pricingData[selected].billingTypes[0];
                  setBilling(firstBilling);
                }
              }}
              className="text-brand-gray w-full cursor-pointer appearance-none rounded-lg border border-gray-300 p-3 pr-10"
            >
              <option>Select Program</option>
              {Object.keys(pricingData).map((key) => (
                <option className="cursor-pointer" key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="text-brand-gray pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Billing Toggle (only if >1 billingType) */}
        {product && product.billingTypes.length > 1 && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
              {product.billingTypes.map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBilling(cycle)}
                  className={`px-6 py-2 text-sm transition sm:text-base ${
                    billing === cycle
                      ? "bg-brand-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {cycle === "one-time"
                    ? "One-Time"
                    : cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Cards OR Fallback */}
        {program && availablePlans.length > 0 ? (
          <div
            className={`grid gap-4 sm:mt-6 sm:gap-6 ${
              availablePlans.length === 1
                ? "grid-cols-1 justify-center"
                : availablePlans.length === 2
                  ? "w-full max-w-6xl grid-cols-1 justify-center sm:grid-cols-2"
                  : "w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {availablePlans.map((plan, i) => (
              <PricingCard
                key={i}
                title={plan.title}
                description={plan.description}
                price={getPrice(plan, currency)}
                currency={currency}
                period={
                  billing === "monthly"
                    ? "month"
                    : billing === "annually"
                      ? "year"
                      : undefined
                }
                highlight={plan.highlight}
                features={plan.features}
              />
            ))}
          </div>
        ) : (
          <NoPlan />
        )}
      </div>
    </section>
  );
};

export default PricingPage;
