"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PricingCard from "./PricingCard";
import NoPlan from "./NoPlan";

const PricingPage = () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");
  const [program, setProgram] = useState<string>("");

  // 💡 Full pricing data per program
  const pricingData: Record<
    string,
    {
      [key in "monthly" | "annually"]: {
        basic: {
          title: string;
          description: string;
          price: string;
          features: string[];
        };
        pro: {
          title: string;
          description: string;
          price: string;
          features: string[];
        };
        premium: {
          title: string;
          description: string;
          price: string;
          features: string[];
        };
      };
    }
  > = {
    "CVP Lite": {
      monthly: {
        basic: {
          title: "Basic",
          description: "Get started with essentials",
          price: "Free",
          features: [
            "5 AI chat messages/day",
            "Basic response model",
            "Community support",
          ],
        },
        pro: {
          title: "Pro",
          description: "Unlock full student support",
          price: "$10",
          features: [
            "Unlimited chat messages",
            "Study plan generator",
            "Priority AI model",
            "Basic analytics",
          ],
        },
        premium: {
          title: "Premium",
          description: "Best for ambitious students",
          price: "$50",
          features: [
            "Everything in Pro",
            "Mentor guidance sessions",
            "Email support",
            "Progress tracking",
          ],
        },
      },
      annually: {
        basic: {
          title: "Basic",
          description: "Get started with essentials",
          price: "Free",
          features: [
            "5 AI chat messages/day",
            "Basic response model",
            "Community support",
          ],
        },
        pro: {
          title: "Pro",
          description: "Unlock full student support",
          price: "$100",
          features: [
            "Unlimited chat messages",
            "Study plan generator",
            "Priority AI model",
            "Basic analytics",
          ],
        },
        premium: {
          title: "Premium",
          description: "Best for ambitious students",
          price: "$500",
          features: [
            "Everything in Pro",
            "Mentor guidance sessions",
            "Email support",
            "Progress tracking",
          ],
        },
      },
    },

    "CVP Advance": {
      monthly: {
        basic: {
          title: "Basic",
          description: "Explore career planning tools",
          price: "Free",
          features: [
            "10 AI chat messages/day",
            "Access to limited modules",
            "Community support",
          ],
        },
        pro: {
          title: "Pro",
          description: "For serious career explorers",
          price: "$20",
          features: [
            "Unlimited chat messages",
            "Career mentor modules",
            "Document upload",
            "Basic analytics",
          ],
        },
        premium: {
          title: "Premium",
          description: "Complete career advancement suite",
          price: "$120",
          features: [
            "Everything in Pro",
            "Advanced mentor tools",
            "1:1 mentor sessions",
            "Email + chat support",
          ],
        },
      },
      annually: {
        basic: {
          title: "Basic",
          description: "Explore career planning tools",
          price: "Free",
          features: [
            "10 AI chat messages/day",
            "Access to limited modules",
            "Community support",
          ],
        },
        pro: {
          title: "Pro",
          description: "For serious career explorers",
          price: "$200",
          features: [
            "Unlimited chat messages",
            "Career mentor modules",
            "Document upload",
            "Basic analytics",
          ],
        },
        premium: {
          title: "Premium",
          description: "Complete career advancement suite",
          price: "$1200",
          features: [
            "Everything in Pro",
            "Advanced mentor tools",
            "1:1 mentor sessions",
            "Email + chat support",
          ],
        },
      },
    },

    // You can continue adding for CareerVerse, Mission NDA, UPSC Mentor, Counselling Guru, Global Navigator...
  };

  const selectedPricing =
    program && pricingData[program] ? pricingData[program][billing] : null;

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
              <option value="CVP Lite">CVP Lite™</option>
              <option value="CVP Advance">CVP Advance™</option>
              <option value="CareerVerse">CareerVerse™</option>
              {/* <option value="Mission NDA">Mission NDA™</option> */}
              {/* <option value="UPSC Mentor">UPSC Mentor™</option> */}
              <option value="Counselling Guru">Counselling Guru™</option>
              <option value="Global Navigator">Global Navigator™</option>
              <option value="Reboot Navigator">Reboot Navigator™</option>
              <option value="Aptitude Trainer">Aptitude Trainer™</option>
              <option value="Admission Test">Admission Test</option>
              <option value="Hiring & Boarding">Hiring & Boarding™</option>
            </select>
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
        {program && selectedPricing ? (
          <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <PricingCard
              title={selectedPricing.basic.title}
              description={selectedPricing.basic.description}
              price={selectedPricing.basic.price}
              features={selectedPricing.basic.features}
            />

            <PricingCard
              title={selectedPricing.pro.title}
              description={selectedPricing.pro.description}
              price={selectedPricing.pro.price}
              period={billing === "monthly" ? "month" : "year"}
              highlight
              features={selectedPricing.pro.features}
            />

            <PricingCard
              title={selectedPricing.premium.title}
              description={selectedPricing.premium.description}
              price={selectedPricing.premium.price}
              period={billing === "monthly" ? "month" : "year"}
              highlight
              features={selectedPricing.premium.features}
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
