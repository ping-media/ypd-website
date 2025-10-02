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
import { FormData } from "../InstituteForm";

export default function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* NDA Consent */}
      <div>
        <Label>
          Are you open to signing a Partnership Agreement / NDA with YPD?
        </Label>
        <Controller
          name="ndaConsent"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
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

      {/* Faculty Training Consent */}
      <div>
        <Label>
          Are you willing to nominate faculty for AI training & onboarding?
        </Label>
        <Controller
          name="facultyTrainingConsent"
          control={control}
          rules={{ required: "Please select Yes or No" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes / No" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Prefer Not To Answer">
                  Prefer Not To Answer
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.facultyTrainingConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.facultyTrainingConsent.message}
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
                accurate. We understand that joining YPD Institute Connect
                requires commitment to student outcomes, teacher training, and
                ethical use of AI tools.
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
