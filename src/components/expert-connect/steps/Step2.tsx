"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../ExpertForm";

export default function Step2() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  // Define sectors to match ExpertForm defaultValues
  const sectors = [
    "IT",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Education",
    "Design",
    "Others",
  ];

  return (
    <div className="space-y-4">
      {/* Current Role */}
      <div>
        <Label>Current Role / Designation</Label>
        <Input
          {...register("currentRole", {
            required: "Current role is required",
          })}
          placeholder="Lecturer, Industry Expert"
          className="mt-2"
        />
        {errors.currentRole && (
          <p className="mt-1 text-sm text-red-500">
            {errors.currentRole.message}
          </p>
        )}
      </div>

      {/* Organization Name */}
      <div>
        <Label>Organization / Institution Name</Label>
        <Input
          {...register("organizationName", {
            required: "Organization/Institution is required",
          })}
          placeholder="XYZ University / Company"
          className="mt-2"
        />
        {errors.organizationName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.organizationName.message}
          </p>
        )}
      </div>

      {/* Total Experience */}
      <div>
        <Label>Total Years of Industry Experience</Label>
        <Input
          type="number"
          {...register("totalExperience", {
            required: "Experience is required",
            min: { value: 0, message: "Must be at least 0" },
            max: { value: 60, message: "Unrealistic experience" },
          })}
          placeholder="0"
          className="mt-2"
        />
        {errors.totalExperience && (
          <p className="mt-1 text-sm text-red-500">
            {errors.totalExperience.message}
          </p>
        )}
      </div>

      {/* Key Sectors */}
      <div>
        <Label>Key Industry Sectors Worked In (tick all that apply)</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {sectors.map((sector) => (
            <div key={sector} className="flex items-center gap-2">
              <Controller
                name={`keySectors.${sector}` as const}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary hover:data-[state=checked]:bg-brand-primary/90 cursor-pointer border border-gray-300"
                  />
                )}
              />
              <span className="cursor-pointer">{sector}</span>
            </div>
          ))}
        </div>
        {errors.keySectors?.message && (
          <p className="mt-1 text-sm text-red-500">
            {String(errors.keySectors.message)}
          </p>
        )}
      </div>

      {/* CV Upload */}
      <div>
        <Label>Upload CV / Profile</Label>
        <Input
          type="file"
          {...register("cv", {
            required: "CV upload is required",
          })}
          accept=".pdf,.doc,.docx"
          className="mt-2 cursor-pointer"
        />
        {errors.cv && (
          <p className="mt-1 text-sm text-red-500">{errors.cv.message}</p>
        )}
      </div>
    </div>
  );
}
