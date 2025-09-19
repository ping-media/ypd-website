import type { Plan, Currency } from "@/components/pricing/prices";

export function getPrice(plan: Plan, currency: Currency) {
  return plan.price[currency];
}