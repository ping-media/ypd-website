"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormData } from "../ExpertForm";

export default function Step5() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* NDA Consent */}
      <div>
        <Label>
          Are you willing to sign a Non-Disclosure Agreement (NDA) with YPD?
        </Label>
        <Controller
          name="ndaConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
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

      {/* Recording Consent */}
      <div>
        <Label>
          Are you open to your sessions being recorded for student learning
          archives?
        </Label>
        <Controller
          name="recordingConsent"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="mt-2 cursor-pointer">
                <SelectValue placeholder="Yes/No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.recordingConsent && (
          <p className="mt-1 text-sm text-red-500">
            {errors.recordingConsent.message}
          </p>
        )}
      </div>

      {/* ID Proof Upload */}
      <div>
        <Label>
          Upload a valid ID Proof (Aadhaar / Passport / Driver&apos;s License)
        </Label>
        <Input
          type="file"
          {...register("idProof", { required: "ID Proof is required" })}
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-2 cursor-pointer"
        />
        {errors.idProof && (
          <p className="mt-1 text-sm text-red-500">{errors.idProof.message}</p>
        )}
      </div>

      {/* Declaration */}
      <div>
        <Controller
          name="declaration"
          control={control}
          rules={{ required: "You must agree to the declaration" }}
          render={({ field }) => (
            <div className="mt-2 flex items-start gap-2">
              <Checkbox
                id="declaration"
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 mt-1 cursor-pointer border border-gray-300 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="declaration"
                className="cursor-pointer text-sm leading-relaxed"
              >
                I hereby declare that the information provided is true and
                accurate. I understand that joining YPD Expert Connect requires
                commitment to ethical knowledge sharing, student-focused
                pedagogy, and confidentiality standards.
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
