"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "../MentorForm";

export default function Step5() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* NDA Consent */}
      <div>
        <Label>Willing to sign NDA?</Label>
        <Controller
          name="ndaConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
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

      {/* Tools Consent */}
      <div>
        <Label>Open to using devices & tools provided by YPD?</Label>
        <Controller
          name="toolsConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
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
        {errors.toolsConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.toolsConsent.message}
          </p>
        )}
      </div>

      {/* ID Proof */}
      <div>
        <Label>Upload ID Proof</Label>
        <Input
          type="file"
          {...register("idProof", { required: "ID proof is required" })}
          accept=".pdf,.jpg,.png"
          className="mt-2 cursor-pointer"
        />
        {errors.idProof && (
          <p className="mt-1 text-sm text-red-500">{errors.idProof.message}</p>
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

      {/* Declaration Checkbox */}
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
                I hereby declare that the information provided is true and
                accurate. I understand that joining Mentor Connect requires
                commitment to YPD&apos;s values, ethical use of AI, and
                confidentiality standards.
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
