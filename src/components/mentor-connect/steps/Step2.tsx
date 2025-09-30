"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { FormData } from "../MentorForm";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      {/* Current Role / Designation */}
      <div>
        <Label>Current Role / Designation</Label>
        <Input
          {...register("role", { required: "Role / Designation is required" })}
          placeholder="Lecturer, Industry Expert"
          className="mt-2"
        />
        {errors.role && (
          <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
        )}
      </div>

      {/* Organization / Institution Name */}
      <div>
        <Label>Organization / Institution Name</Label>
        <Input
          {...register("organization", {
            required: "Organization is required",
          })}
          placeholder="XYZ University / Company"
          className="mt-2"
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-500">
            {errors.organization.message}
          </p>
        )}
      </div>

      {/* Total Years of Work Experience */}
      <div>
        <Label>Total Years of Work Experience</Label>
        <Input
          type="number"
          {...register("experience", {
            required: "Experience is required",
            min: { value: 0, message: "Experience cannot be negative" },
          })}
          className="mt-2"
        />
        {errors.experience && (
          <p className="mt-1 text-sm text-red-500">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Previous Teaching / Mentoring Experience */}
      <div>
        <Label>Previous Teaching / Mentoring Experience</Label>
        <Textarea
          {...register("experienceDetails", {
            required: "Please describe your previous experience",
          })}
          placeholder="Yes or No, then briefly describe your relevant experience"
          className="mt-2"
        />
        {errors.experienceDetails && (
          <p className="mt-1 text-sm text-red-500">
            {errors.experienceDetails.message}
          </p>
        )}
      </div>

      {/* Upload CV / Resume */}
      <div>
        <Label>Upload CV / Resume</Label>
        <Input
          type="file"
          {...register("cv", { required: "CV / Resume is required" })}
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
