"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../CorporateForm";

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const csrFocusOptions = ["Education", "Health", "Skilling", "Others"];

  return (
    <div className="space-y-4">
      <div>
        <Label>Annual CSR Budget (Approximate)</Label>
        <Controller
          name="annualCSRBudget"
          control={control}
          rules={{ required: "Annual CSR budget is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Below ₹10 Lakhs">Below ₹10 Lakhs</SelectItem>
                <SelectItem value="₹10 Lakhs - ₹50 Lakhs">
                  ₹10 Lakhs - ₹50 Lakhs
                </SelectItem>
                <SelectItem value="₹50 Lakhs - ₹1 Crore">
                  ₹50 Lakhs - ₹1 Crore
                </SelectItem>
                <SelectItem value="₹1 Crore - ₹5 Crores">
                  ₹1 Crore - ₹5 Crores
                </SelectItem>
                <SelectItem value="₹5 Crores - ₹10 Crores">
                  ₹5 Crores - ₹10 Crores
                </SelectItem>
                <SelectItem value="Above ₹10 Crores">
                  Above ₹10 Crores
                </SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.annualCSRBudget && (
          <p className="mt-1 text-sm text-red-500">
            {errors.annualCSRBudget.message}
          </p>
        )}
      </div>

      {/* Current CSR Focus Areas */}
      <div>
        <Label>Current CSR Focus Areas</Label>
        <p className="mt-1 text-sm text-gray-500">Select all that apply</p>
        <div className="mt-2 flex flex-col space-y-2">
          {csrFocusOptions.map((focus) => (
            <Controller
              key={focus}
              name={`csrFocusAreas.${focus}` as const}
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`csrFocusAreas.${focus}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor={`csrFocusAreas.${focus}`}
                    className="cursor-pointer"
                  >
                    {focus}
                  </label>
                </div>
              )}
            />
          ))}
        </div>
        {/* Validation error for CSR focus areas */}
        {errors.csrFocusAreas &&
          typeof errors.csrFocusAreas.message === "string" && (
            <p className="mt-1 text-sm text-red-500">
              {errors.csrFocusAreas.message}
            </p>
          )}
      </div>

      {/* Number of CSR Beneficiaries Supported Last Year */}
      <div>
        <Label>Number of CSR Beneficiaries Supported Last Year</Label>
        <Controller
          name="beneficiariesSupported"
          control={control}
          rules={{ required: "Number of beneficiaries is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 w-full cursor-pointer">
                <SelectValue placeholder="Select Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">0 - 100</SelectItem>
                <SelectItem value="100-500">100 - 500</SelectItem>
                <SelectItem value="500-1000">500 - 1,000</SelectItem>
                <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                <SelectItem value="10000+">10,000+</SelectItem>
                <SelectItem value="First Time CSR Initiative">
                  First Time CSR Initiative
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.beneficiariesSupported && (
          <p className="mt-1 text-sm text-red-500">
            {errors.beneficiariesSupported.message}
          </p>
        )}
      </div>
    </div>
  );
}
