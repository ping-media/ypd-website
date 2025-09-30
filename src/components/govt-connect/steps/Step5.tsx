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
import { FormData } from "../GovtForm";

export default function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* MoU / Agreement Consent */}
      <div>
        <Label>Are you open to signing an MoU / Agreement with YPD?</Label>
        <Controller
          name="mouConsent"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.mouConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.mouConsent.message}
          </p>
        )}
      </div>

      {/* Tracking Consent */}
      <div>
        <Label>
          Are you willing to allow YPD to track and report candidate outcomes
          for accountability?
        </Label>
        <Controller
          name="trackingConsent"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.trackingConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.trackingConsent.message}
          </p>
        )}
      </div>

      {/* Declaration */}
      <div>
        <Controller
          name="declaration"
          control={control}
          rules={{ required: "You must accept the declaration to proceed" }}
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
                accurate. We understand that joining YPD Govt Connect requires
                collaboration for outcome-driven training, candidate
                accountability, and ethical use of AI-enabled learning tools.
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
