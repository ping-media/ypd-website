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
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../MsmeForm";

export default function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const weeklyCommitments = ["2-4", "5-8", "Other"];
  const budgetOptions = ["Low", "Medium", "High", "Prefer Not To Answer"];
  const yesNoOptions = ["Yes", "No", "Prefer Not To Answer"];

  return (
    <div className="space-y-6">
      {/* Weekly Commitment */}
      <div>
        <Label>How many hours per week can employees commit to training?</Label>
        <Controller
          name="weeklyCommitment"
          control={control}
          rules={{ required: "Please select weekly commitment" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="2–4 / 5–8 / Other" />
              </SelectTrigger>
              <SelectContent>
                {weeklyCommitments.map((w) => (
                  <SelectItem key={w} value={w}>
                    {w}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.weeklyCommitment && (
          <p className="mt-1 text-sm text-red-500">
            {errors.weeklyCommitment.message}
          </p>
        )}
      </div>

      {/* Budget Readiness */}
      <div>
        <Label>Budget Readiness for Upskilling</Label>
        <Controller
          name="budgetReadiness"
          control={control}
          rules={{ required: "Please select budget readiness" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Low / Medium / High" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.budgetReadiness && (
          <p className="mt-1 text-sm text-red-500">
            {errors.budgetReadiness.message}
          </p>
        )}
      </div>

      {/* AI Tools Consent */}
      <div>
        <Label>
          Are you open to adopting AI-enabled tools for training delivery?
        </Label>
        <Controller
          name="adoptAITools"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                {yesNoOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.adoptAITools && (
          <p className="mt-1 text-sm text-red-500">
            {errors.adoptAITools.message}
          </p>
        )}
      </div>

      {/* NDA Consent */}
      <div>
        <Label>
          Are you willing to sign a Partnership Agreement / NDA with YPD?
        </Label>
        <Controller
          name="ndaConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                {yesNoOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.ndaConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.ndaConsent.message}
          </p>
        )}
      </div>

      {/* Data Consent (Optional) */}
      <div className="border-t border-gray-200 pt-4">
        <Controller
          name="dataConsent"
          control={control}
          render={({ field }) => (
            <div className="flex items-start gap-2">
              <Checkbox
                id="dataConsent"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="dataConsent"
                className="cursor-pointer text-sm leading-relaxed"
              >
                I acknowledge and consent to the handling of my information.
              </Label>
            </div>
          )}
        />
      </div>

      {/* Declaration */}
      <div>
        <Controller
          name="declaration"
          control={control}
          rules={{ required: "You must accept the declaration" }}
          render={({ field }) => (
            <div className="mt-2 flex items-start gap-2">
              <Checkbox
                id="declaration"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="declaration"
                className="cursor-pointer text-sm leading-relaxed"
              >
                We hereby declare that the information provided is true and
                accurate. We understand that joining YPD MSME Connect requires
                commitment to workforce development, employee participation, and
                ethical use of AI-enabled tools.
              </Label>
            </div>
          )}
        />
        {errors.declaration && (
          <p className="mt-1 text-sm text-red-500">
            {errors.declaration.message}
          </p>
        )}
      </div>
    </div>
  );
}
